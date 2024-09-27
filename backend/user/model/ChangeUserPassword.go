package model

type ChangeUserPassword struct {
	Email       string `json:"email" validate:"required,email"`
	Oldpassword string `json:"oldpassword" validate:"required,password"`
	Newpassword string `json:"newpassword" validate:"required,password"`
}
