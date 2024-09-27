package service

import (
	"context"
	"errors"
	"fmt"
	mail "mail/protoc"
	"sync"
	"time"
	"user/interfaces"
	"user/internal/database"
	"user/model"
	"user/utils"
	"user/view"

	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
	"google.golang.org/grpc"
)

// UserServiceInterface defines the contract for user service methods.
type UserServiceInterface interface {
	UserLogin(ctx context.Context, email, password string) (string, bool, error)
	RegisterUser(ctx context.Context, params model.CreateUser) (string, error)
	GetUserByID(ctx context.Context, userID int32, typ string) (interface{}, error)
	GetUsers(ctx context.Context, options *utils.QueryOptions) ([]database.GetUsersRow, error)
	GetUsersByIds(ctx context.Context, userIDs []int) ([]view.UserDTO, error)
	RequestPasswordReset(ctx context.Context, email string) (string, error)
	UpdateUserPassword(ctx context.Context, params model.ResetUserPassword) (string, error)
	ChangeUserPassword(ctx context.Context, params model.ChangeUserPassword) (string, error)
	GetUserProfileByEmail(ctx context.Context, email string) (database.Usersprofile, error)
	UpdateUserProfile(ctx context.Context, params model.UserProfile) (string, error)
	UserProfile(ctx context.Context, params model.UserProfile) (string, error)
}

type Server struct {
	Client mail.EmailServiceClient
}

// TokenClaims represents the claims in the token
type TokenClaims struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

// UserService implements the UserServiceInterface and contains dependencies.
type UserService struct {
	repo   interfaces.UserInterface
	jwtKey []byte
	conn   *grpc.ClientConn
}

// NewUserService creates a new UserService with the given dependencies.
func NewUserService(repo interfaces.UserInterface, jwtKey []byte, conn *grpc.ClientConn) UserServiceInterface {
	return &UserService{repo: repo, jwtKey: jwtKey, conn: conn}
}

// UserLogin validates a user and generates a JWT token if successful.
func (s *UserService) UserLogin(ctx context.Context, email, password string) (string, bool, error) {
	// Fetch user from the repository
	dbUser, err := s.repo.ValidateUser(ctx, email)
	if err != nil {
		return "", false, fmt.Errorf("invalid user credential")
	}

	// Compare hashed password with the provided password
	if err := bcrypt.CompareHashAndPassword([]byte(dbUser.Passwordhash), []byte(password)); err != nil {
		return "", false, fmt.Errorf("invalid user credential")
	}

	// Generate JWT token
	tokenString, err := s.GenerateJWT(dbUser)
	if err != nil {
		return "", false, fmt.Errorf("failed to generate JWT: %w", err)
	}

	return tokenString, true, nil
}

// RegisterUser creates a new user after hashing the password.
func (s *UserService) RegisterUser(ctx context.Context, user model.CreateUser) (string, error) {
	// Hash the user's password
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("failed to hash password: %w", err)
	}
	user.Password = string(hashedPassword)

	// Store the user in the repository
	_, err = s.repo.CreateUser(ctx, database.CreateUserParams{
		Email:        user.Email,
		Passwordhash: user.Password,
		Subscribed:   false,
		Createdat:    time.Now().UTC(),
	})
	if err != nil {
		return "", fmt.Errorf("failed to create user: %w", err)
	}

	return "User registered successfully", nil
}

// GetUserByID retrieves a user by ID and returns either the user or a DTO based on the type.
func (s *UserService) GetUserByID(ctx context.Context, userID int32, typ string) (interface{}, error) {
	user, err := s.repo.GetUserByID(ctx, userID)
	if err != nil {
		return nil, fmt.Errorf("failed to get user by ID: %w", err)
	}

	switch typ {
	case "byUserDto":
		return view.ToUserDTOById(user), nil
	case "byUser":
		return user, nil
	default:
		return nil, errors.New("invalid type specified")
	}
}

// GetUsers retrieves users based on the provided query options.
func (s *UserService) GetUsers(ctx context.Context, options *utils.QueryOptions) ([]database.GetUsersRow, error) {
	var users []database.GetUsersRow
	var err error

	if options == nil {
		users, err = s.repo.GetUsers(ctx)
	}
	// else {
	// 	users, err = s.repo.GetUsersWithDataActions(ctx.Request.Context(), *options)
	// }
	if err != nil {
		return nil, fmt.Errorf("failed to get users: %w", err)
	}

	// Convert to DTOs
	return users, nil
}

// GetUsersByIds retrieves users by their IDs concurrently.
func (s *UserService) GetUsersByIds(ctx context.Context, userIDs []int) ([]view.UserDTO, error) {
	if len(userIDs) == 0 {
		return nil, errors.New("no user IDs provided")
	}

	// Channel to collect user data and error channel to capture errors
	usersChan := make(chan database.GetUserByIDRow, len(userIDs))
	errChan := make(chan error, len(userIDs))
	var wg sync.WaitGroup

	// Fetch each user concurrently
	for _, id := range userIDs {
		wg.Add(1)
		go func(userID int32) {
			defer wg.Done()
			user, err := s.repo.GetUserByID(ctx, userID)
			if err != nil {
				errChan <- fmt.Errorf("failed to get user with ID %d: %w", userID, err)
				return
			}
			usersChan <- user
		}(int32(id))
	}

	// Close the channels once all goroutines are done
	go func() {
		wg.Wait()
		close(usersChan)
		close(errChan)
	}()

	// Handle potential errors
	var err error
	select {
	case err = <-errChan:
		return nil, err // Return the first error encountered
	default:
	}

	// Collect and convert user data
	var usersData []database.GetUserByIDRow
	for user := range usersChan {
		usersData = append(usersData, user)
	}

	// Convert to DTOs
	userDTOs := view.ToUserDTOs(usersData)
	return userDTOs, nil
}

func (s *UserService) RequestPasswordReset(ctx context.Context, email string) (string, error) {

	client := mail.NewEmailServiceClient(s.conn)

	user, err := s.repo.GetUserByEmail(ctx, email)
	if err != nil {
		return "", fmt.Errorf("no user found with this email")
	}

	// Generate a password reset token (JWT)
	resetToken, err := s.GenerateResetToken(user.Email)
	if err != nil {
		return "", fmt.Errorf("failed to generate reset token")
	}

	// Send the reset token to the user's email
	resetRequest := &mail.SendPasswordResetRequest{
		Email:      user.Email,
		ResetToken: resetToken,
	}

	emailResponse, err := client.SendPasswordResetEmail(ctx, resetRequest)
	if err != nil {
		return "", fmt.Errorf("failed to send reset email")
	}

	return emailResponse.Message, nil
}

func (s *UserService) UpdateUserPassword(ctx context.Context, params model.ResetUserPassword) (string, error) {
	token, err := jwt.ParseWithClaims(params.Token, &TokenClaims{}, func(token *jwt.Token) (interface{}, error) {
		return s.jwtKey, nil
	})

	if err != nil {
		return "", fmt.Errorf("failed to parse token: %w", err)
	}

	if claims, ok := token.Claims.(*TokenClaims); ok && token.Valid {

		if claims.ExpiresAt < time.Now().Unix() {
			return "", fmt.Errorf("token has expired")
		}

		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(params.Password), bcrypt.DefaultCost)
		if err != nil {
			return "", fmt.Errorf("failed to hash password: %w", err)
		}

		params.Password = string(hashedPassword)

		// 4. Store the updated password in the repository
		_, err = s.repo.UpdateUserPassword(ctx, database.UpdateUserPasswordParams{
			Passwordhash: params.Password,
			Email:        params.Email,
		})

		if err != nil {
			return "", fmt.Errorf("failed to update password: %w", err)
		}

		return "Password Updated successfully", nil

	} else {
		return "", fmt.Errorf("invalid token")
	}
}

func (s *UserService) ChangeUserPassword(ctx context.Context, params model.ChangeUserPassword) (string, error) {
	user, err := s.repo.GetUserByEmail(ctx, params.Email)
	if err != nil {
		return "", fmt.Errorf("no user found with this email")
	}

	// Compare the provided old password with the stored hashed password
	err = bcrypt.CompareHashAndPassword([]byte(user.Passwordhash), []byte(params.Oldpassword))
	if err != nil {
		return "", fmt.Errorf("old password is incorrect")
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(params.Newpassword), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("failed to hash password: %w", err)
	}

	params.Newpassword = string(hashedPassword)

	_, err = s.repo.UpdateUserPassword(ctx, database.UpdateUserPasswordParams{
		Passwordhash: params.Newpassword,
		Email:        params.Email,
	})

	if err != nil {
		return "", fmt.Errorf("failed to update password: %w", err)
	}

	return "Password Updated successfully", nil
}

// Create User Profile.
func (s *UserService) UserProfile(ctx context.Context, user model.UserProfile) (string, error) {

	_, err := s.repo.UserProfile(ctx, database.CreateUserProfileParams{
		Fullname:    user.Fullname,
		Email:       user.Email,
		Useraddress: user.UserAddress,
		Postcode:    user.Postcode,
	})
	if err != nil {
		return "", fmt.Errorf("failed to create user profile: %w", err)
	}

	return "User Profile Created", nil
}

func (s *UserService) UpdateUserProfile(ctx context.Context, user model.UserProfile) (string, error) {

	_, err := s.repo.UpdateUserProfile(ctx, database.UpdateUserProfileParams{
		Fullname:    user.Fullname,
		Useraddress: user.UserAddress,
		Postcode:    user.Postcode,
		Email:       user.Email,
	})
	if err != nil {
		return "", fmt.Errorf("failed to create user profile: %w", err)
	}

	return "User Profile Created", nil
}

// Create User Profile.
func (s *UserService) GetUserProfileByEmail(ctx context.Context, userEmail string) (database.Usersprofile, error) {
	user, err := s.repo.GetUserProfileByEmail(ctx, userEmail)
	if err != nil {
		return database.Usersprofile{}, fmt.Errorf("failed to fetch user profile")
	}

	return user, nil
}

// generateJWT generates a JWT token for a given user.
func (s *UserService) GenerateJWT(user database.ValidateuserRow) (string, error) {
	expirationTime := time.Now().Add(24 * 3 * time.Hour)
	authTime := time.Now().Unix()

	claims := &utils.Claims{
		UserID:   uint64(user.ID),
		Email:    user.Email,
		ClientID: "roomify",
		Sub:      string(user.ID),
		AuthTime: authTime,
		Idp:      "local",
		Role:     []string{},
		StandardClaims: jwt.StandardClaims{
			ExpiresAt: expirationTime.Unix(),
			IssuedAt:  authTime,
			NotBefore: authTime,
			Issuer:    "http://",
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(s.jwtKey)
}

func (s *UserService) GenerateResetToken(email string) (string, error) {
	expirationTime := time.Now().Add(30 * time.Minute)
	claims := &jwt.StandardClaims{
		Subject:   email,
		ExpiresAt: expirationTime.Unix(),
	}

	// Sign the token with the secret key
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(s.jwtKey)
	if err != nil {
		return "", err
	}
	return tokenString, nil
}
