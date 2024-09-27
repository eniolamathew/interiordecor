package validation

import (
	"strconv"
	"strings"

	"github.com/go-playground/validator/v10"
)

// Register your user validations with custom error messages
func RegisterDesignValidations(v *validator.Validate) {
	v.RegisterValidation("min", func(fl validator.FieldLevel) bool {
		// Convert the Param (which is a string) to an integer
		minLength, err := strconv.Atoi(fl.Param())
		if err != nil {
			return false
		}

		// Check if the length of the field value is at least `minLength`
		return len(fl.Field().String()) >= minLength
	})

	v.RegisterValidation("gt", func(fl validator.FieldLevel) bool {
		return fl.Field().Int() > 0
	})
}

// Function to return error messages based on the field with the field name in lowercase
func GetErrorMessage(err validator.FieldError) string {
	fieldName := strings.ToLower(err.Field())

	switch fieldName {
	case "description":
		if err.Tag() == "required" {
			return "Description is a required field"
		}
	case "length":
		if err.Tag() == "required" {
			return "Length is a required field"
		}
	case "width":
		if err.Tag() == "required" {
			return "Width is a required field"
		}
	case "height":
		if err.Tag() == "required" {
			return "Height is required field"
		} 
	case "style":
		if err.Tag() == "required" {
			return "Style is required"
		} 
	case "color":
		if err.Tag() == "required" {
			return "Color is required"
		} 
	case "furniture":
		if err.Tag() == "required" {
			return "Furniture is required"
		} 
	case "released":
		if err.Tag() == "required" {
			return "Release date is required"
		}
	}
	return err.Error() // Default error message
}
