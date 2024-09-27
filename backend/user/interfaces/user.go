package interfaces

import (
	"context"
	"user/internal/database"
)

type UserInterface interface {
	ValidateUser(ctx context.Context, username string) (database.ValidateuserRow, error)
	CreateUser(ctx context.Context, params database.CreateUserParams) (int32, error)
	GetUserByID(ctx context.Context, userID int32) (database.GetUserByIDRow, error)
	GetUsers(ctx context.Context) ([]database.GetUsersRow, error)
	UpdateUserPassword(ctx context.Context, params database.UpdateUserPasswordParams) (database.User, error)
	GetUserByEmail(ctx context.Context, userEmail string) (database.GetUserByEmailRow, error)
	UserProfile(ctx context.Context, params database.CreateUserProfileParams) (int32, error)
	GetUserProfileByEmail(ctx context.Context, email string) (database.Usersprofile, error)
	UpdateUserProfile(ctx context.Context, params database.UpdateUserProfileParams) (string, error) 
	// GetUsersWithDataActions(ctx context.Context, options utils.QueryOptions) ([]database.User, error)
}
