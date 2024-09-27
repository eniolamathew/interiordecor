package validation

import (
	"regexp"
	"strconv"
	"strings"
	"unicode"

	"github.com/go-playground/validator/v10"
)

func IsValidEmail(email string) bool {
	// Define a simplified regex pattern for email validation
	const emailRegex = `^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$`

	// Compile the pattern
	re := regexp.MustCompile(emailRegex)

	// Check if the email matches the pattern
	return re.MatchString(email)
}

// IsValidPassword checks if the password meets the specified criteria
func IsValidPassword(password string) bool {
	if len(password) < 8 {
		return false
	}

	hasUpper := false
	hasLower := false
	hasNumber := false
	hasSpecial := false

	// Check each character in the password
	for _, char := range password {
		switch {
		case unicode.IsUpper(char):
			hasUpper = true
		case unicode.IsLower(char):
			hasLower = true
		case unicode.IsDigit(char):
			hasNumber = true
		case unicode.IsPunct(char) || unicode.IsSymbol(char):
			hasSpecial = true
		}
	}

	return hasUpper && hasLower && hasNumber && hasSpecial
}

// Register your user validations with custom error messages
func RegisterUserValidations(v *validator.Validate) {
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

	v.RegisterValidation("password", func(fl validator.FieldLevel) bool {
		return IsValidPassword(fl.Field().String())
	})

	v.RegisterValidation("email", func(fl validator.FieldLevel) bool {
		return IsValidEmail(fl.Field().String())
	})
}

// Function to return error messages based on the field with the field name in lowercase
func GetErrorMessageForField(err validator.FieldError) string {
	fieldName := strings.ToLower(err.Field())

	switch fieldName {
	case "email":
		if err.Tag() == "required" {
			return "Email is a required field"
		} else if err.Tag() == "email" {
			return "Invalid Email Address"
		}
	case "password":
		if err.Tag() == "required" {
			return "Password is a required field"
		} else if err.Tag() == "password" {
			return "Password does not meet criteria"
		}
	case "title":
		if err.Tag() == "required" {
			return "Title is a required field"
		} else if err.Tag() == "min" {
			return "Title must be at least 2 characters long"
		}
	case "artistid":
		if err.Tag() == "required" {
			return "Artist ID is required field"
		} else if err.Tag() == "gt" {
			return "Artist ID must be greater than 0"
		}
	case "price":
		if err.Tag() == "required" {
			return "Price is required"
		} else if err.Tag() == "gt" {
			return "Price must be greater than 0"
		}
	case "released":
		if err.Tag() == "required" {
			return "Release date is required"
		}
	}
	return err.Error() // Default error message
}
