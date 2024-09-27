package model

type ResetUserPassword struct {
	Email    string `json:"email" validate:"required,email"`
	Password string `json:"password" validate:"required,password"`
	Token    string `json:"token"`
}
