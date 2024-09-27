package repository

import (
	"context"
	"user/interfaces"
	"user/internal/database"
	// "user/utils"
)

type ApiConfig struct {
	DB *database.Queries
}

type UserRepo struct {
	apiCfg *ApiConfig
}

func NewUserRepo(apiCfg *ApiConfig) interfaces.UserInterface {
	return &UserRepo{apiCfg: apiCfg}
}

// Implement User Interface methods on UserRepo struct
func (repo *UserRepo) ValidateUser(ctx context.Context, email string) (database.ValidateuserRow, error) {
	// Delegate to ApiConfig's DB method
	user, err := repo.apiCfg.DB.Validateuser(ctx, email)
	return user, err
}

func (repo *UserRepo) CreateUser(ctx context.Context, params database.CreateUserParams) (int32, error) {
	user, err := repo.apiCfg.DB.CreateUser(ctx, params)
	if err != nil {
		return 0, err
	}

	return int32(user.ID), nil
}

func (repo *UserRepo) GetUserByID(ctx context.Context, userID int32) (database.GetUserByIDRow, error) {
	user, err := repo.apiCfg.DB.GetUserByID(ctx, userID)
	return user, err
}

func (repo *UserRepo) GetUsers(ctx context.Context) ([]database.GetUsersRow, error) {
	users, err := repo.apiCfg.DB.GetUsers(ctx)
	return users, err
}

func (repo *UserRepo) GetUserByEmail(ctx context.Context, userEmail string) (database.GetUserByEmailRow, error) {
	user, err := repo.apiCfg.DB.GetUserByEmail(ctx, userEmail)
	return user, err
}

func (repo *UserRepo) UpdateUserPassword(ctx context.Context, params  database.UpdateUserPasswordParams ) (database.User, error) {
	user, err := repo.apiCfg.DB.UpdateUserPassword(ctx, params)
	return user, err
}

func (repo *UserRepo) UserProfile(ctx context.Context, params database.CreateUserProfileParams) (int32, error) {
	user, err := repo.apiCfg.DB.CreateUserProfile(ctx, params)
	if err != nil {
		return 0, err
	}

	return int32(user.ID), nil
}

func (repo *UserRepo) UpdateUserProfile(ctx context.Context, params database.UpdateUserProfileParams) (string, error) {
	_, err := repo.apiCfg.DB.UpdateUserProfile(ctx, params)
	if err != nil {
		return "", err
	}

	return "Succssfull", nil
}

func (repo *UserRepo) GetUserProfileByEmail(ctx context.Context, userEmail string) (database.Usersprofile, error) {
	user, err := repo.apiCfg.DB.GetUserProfileByEmail(ctx, userEmail)
	if err != nil {
		return database.Usersprofile{}, err
	}

	return user, nil
}



// func (repo *UserRepo) GetUsersWithDataActions(ctx context.Context, options utils.QueryOptions) ([]database.User, error) {
// 	 users, err := repo.apiCfg.DB.GetUsersWithDataActions(ctx, options)
// 	 return users, err
// }

