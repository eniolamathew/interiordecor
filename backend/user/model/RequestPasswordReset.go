package model

type
 RequestPasswordReset struct {
	Email    string `json:"email" validate:"required,email"`
}