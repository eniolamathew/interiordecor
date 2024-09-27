package view

import (
	"time"
	"user/internal/database"
)

type UserDTO struct {
	Id         int32  `json:"id"`
	Email      string `json:"email"`
	Subscribed bool   `json:"subscribed"`
	Createdat  string `json:"createdat"`
}

type UserDTOInterface interface {
	ToUserDTO(user database.User) UserDTO
	ToUser(user database.User) database.User
}

func ToUserDTOById(user database.GetUserByIDRow) UserDTO {
	return UserDTO{
		Id:         user.ID,
		Email:      user.Email,
		Subscribed: user.Subscribed,
		Createdat:  user.Createdat.Format(time.RFC3339),
	}
}

func ToUserDTO(user database.GetUsersRow) UserDTO {
	return UserDTO{
		Id:         user.ID,
		Email:      user.Email,
		Subscribed: user.Subscribed,
		Createdat:  user.Createdat.Format(time.RFC3339),
	}
}

func ToUser(user database.User) database.User {
	return user
}

// Function to convert a slice of Users to a slice of UserDTOs
func ToUserDTOs(users []database.GetUserByIDRow) []UserDTO {
	userDTOs := make([]UserDTO, len(users))
	for i, user := range users {
		userDTOs[i] = ToUserDTOById(user)
	}
	return userDTOs
}

// Function to convert a slice of Users to a slice of UserDTOs
func ToUsersDTOs(users []database.GetUsersRow) []UserDTO {
	userDTOs := make([]UserDTO, len(users))
	for i, user := range users {
		userDTOs[i] = ToUserDTO(user)
	}
	return userDTOs
}

