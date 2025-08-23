package service

import (
	"context"
	"errors"
	"fmt"
	"sync"
	"time"
	"user/interfaces"
	"user/internal/database"
	"user/model"
	"user/utils"
	"user/view"

	mailprotoc "mail/protoc"

	"github.com/golang-jwt/jwt"
	"golang.org/x/crypto/bcrypt"
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

// TokenClaims represents the claims in the JWT token
type TokenClaims struct {
	Email string `json:"email"`
	jwt.StandardClaims
}

// UserService contains dependencies for the user microservice
type UserService struct {
	repo       interfaces.UserInterface
	jwtKey     []byte
	mailClient mailprotoc.EmailServiceClient // Injected gRPC mail client
}

// NewUserService creates a new UserService with the given dependencies
func NewUserService(
	repo interfaces.UserInterface,
	jwtKey []byte,
	mailClient mailprotoc.EmailServiceClient,
) UserServiceInterface {
	return &UserService{
		repo:       repo,
		jwtKey:     jwtKey,
		mailClient: mailClient,
	}
}

// --------------------------- User Auth ---------------------------

func (s *UserService) UserLogin(ctx context.Context, email, password string) (string, bool, error) {
	dbUser, err := s.repo.ValidateUser(ctx, email)
	if err != nil {
		return "", false, errors.New("invalid user credential")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(dbUser.Passwordhash), []byte(password)); err != nil {
		return "", false, errors.New("invalid user credential")
	}

	tokenString, err := s.GenerateJWT(dbUser)
	if err != nil {
		return "", false, fmt.Errorf("failed to generate JWT: %w", err)
	}

	return tokenString, true, nil
}

func (s *UserService) RegisterUser(ctx context.Context, user model.CreateUser) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("failed to hash password: %w", err)
	}
	user.Password = string(hashedPassword)

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

// --------------------------- User Retrieval ---------------------------

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

func (s *UserService) GetUsers(ctx context.Context, options *utils.QueryOptions) ([]database.GetUsersRow, error) {
	users, err := s.repo.GetUsers(ctx)
	if err != nil {
		return nil, fmt.Errorf("failed to get users: %w", err)
	}
	return users, nil
}

func (s *UserService) GetUsersByIds(ctx context.Context, userIDs []int) ([]view.UserDTO, error) {
	if len(userIDs) == 0 {
		return nil, errors.New("no user IDs provided")
	}

	usersChan := make(chan database.GetUserByIDRow, len(userIDs))
	errChan := make(chan error, len(userIDs))
	var wg sync.WaitGroup

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

	go func() {
		wg.Wait()
		close(usersChan)
		close(errChan)
	}()

	select {
	case err := <-errChan:
		return nil, err
	default:
	}

	var usersData []database.GetUserByIDRow
	for user := range usersChan {
		usersData = append(usersData, user)
	}

	return view.ToUserDTOs(usersData), nil
}

// --------------------------- Password Management ---------------------------

func (s *UserService) RequestPasswordReset(ctx context.Context, email string) (string, error) {
	// Fetch the user
	user, err := s.repo.GetUserByEmail(ctx, email)
	if err != nil {
		return "", fmt.Errorf("no user found with this email")
	}

	// Generate a reset token
	resetToken, err := s.GenerateResetToken(user.Email)
	if err != nil {
		return "", fmt.Errorf("failed to generate reset token: %w", err)
	}

	// Send password reset email
	req := &mailprotoc.SendPasswordResetRequest{
		Email:      user.Email,
		ResetToken: resetToken,
	}

	resp, err := s.mailClient.SendPasswordResetEmail(ctx, req)
	if err != nil {
		return "", fmt.Errorf("failed to send reset email: %w", err)
	}

	return resp.GetMessage(), nil
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
			return "", errors.New("token has expired")
		}

		hashedPassword, err := bcrypt.GenerateFromPassword([]byte(params.Password), bcrypt.DefaultCost)
		if err != nil {
			return "", fmt.Errorf("failed to hash password: %w", err)
		}

		_, err = s.repo.UpdateUserPassword(ctx, database.UpdateUserPasswordParams{
			Passwordhash: string(hashedPassword),
			Email:        params.Email,
		})
		if err != nil {
			return "", fmt.Errorf("failed to update password: %w", err)
		}

		return "Password updated successfully", nil
	}

	return "", errors.New("invalid token")
}

func (s *UserService) ChangeUserPassword(ctx context.Context, params model.ChangeUserPassword) (string, error) {
	user, err := s.repo.GetUserByEmail(ctx, params.Email)
	if err != nil {
		return "", errors.New("no user found with this email")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Passwordhash), []byte(params.Oldpassword)); err != nil {
		return "", errors.New("old password is incorrect")
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(params.Newpassword), bcrypt.DefaultCost)
	if err != nil {
		return "", fmt.Errorf("failed to hash password: %w", err)
	}

	_, err = s.repo.UpdateUserPassword(ctx, database.UpdateUserPasswordParams{
		Passwordhash: string(hashedPassword),
		Email:        params.Email,
	})
	if err != nil {
		return "", fmt.Errorf("failed to update password: %w", err)
	}

	return "Password updated successfully", nil
}

// --------------------------- User Profile ---------------------------

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
	return "User profile created", nil
}

func (s *UserService) UpdateUserProfile(ctx context.Context, user model.UserProfile) (string, error) {
	_, err := s.repo.UpdateUserProfile(ctx, database.UpdateUserProfileParams{
		Fullname:    user.Fullname,
		Useraddress: user.UserAddress,
		Postcode:    user.Postcode,
		Email:       user.Email,
	})
	if err != nil {
		return "", fmt.Errorf("failed to update user profile: %w", err)
	}
	return "User profile updated", nil
}

func (s *UserService) GetUserProfileByEmail(ctx context.Context, email string) (database.Usersprofile, error) {
	user, err := s.repo.GetUserProfileByEmail(ctx, email)
	if err != nil {
		return database.Usersprofile{}, errors.New("failed to fetch user profile")
	}
	return user, nil
}

// --------------------------- JWT Helpers ---------------------------

func (s *UserService) GenerateJWT(user database.ValidateuserRow) (string, error) {
	expirationTime := time.Now().Add(72 * time.Hour)
	authTime := time.Now().Unix()

	claims := &utils.Claims{
		UserID:   uint64(user.ID),
		Email:    user.Email,
		ClientID: "roomify",
		Sub:      fmt.Sprintf("%d", user.ID),
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

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(s.jwtKey)
}
