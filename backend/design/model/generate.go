package model

type Generate struct {
	Description string `json:"description" validate:"required"`
	Roomtype    string `json:"roomtype" validate:"required"`
	Style       string `json:"style" validate:"required"`
	Color       string `json:"color" validate:"required"`
	Email       string `json:"email" validate:"required,email"`
}
