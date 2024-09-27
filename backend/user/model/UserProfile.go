package model

type UserProfile struct {
	Email       string `json:"email" validate:"required,email"`
	Fullname    string `json:"fullname" validate:"required"`
	UserAddress string `json:"useraddress" validate:"required"`
	Postcode    string `json:"postcode" validate:"required"`
}