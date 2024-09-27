package utils

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func RespondWithError(ctx *gin.Context, code int, message interface{}) {
	if code > 499 {
		log.Println("Responding with 5xx error: ", message)
	}

	// Prepare the error message as a slice to ensure it's uniform
	var errorMessages []interface{}

	// Check the type of message and adjust accordingly
	switch v := message.(type) {
	case string:
		errorMessages = append(errorMessages, v)
	case []string:
		for _, msg := range v {
			errorMessages = append(errorMessages, msg)
		}
	default:
		errorMessages = append(errorMessages, message)
	}

	type errResponse struct {
		Errors     []interface{} `json:"errors"`
		Success    bool          `json:"success"`
		StatusCode int           `json:"statusCode"`
		Payload    []interface{} `json:"payload"`
	}

	response := errResponse{
		Errors:     errorMessages,
		Success:    false,
		StatusCode: code,
		Payload:    []interface{}{},
	}

	// Marshal the response object to JSON
	data, err := json.Marshal(response)

	if err != nil {
		log.Printf("Failed to marshal JSON response: %v", response)
		ctx.Writer.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Write the JSON response
	ctx.Writer.Header().Set("Content-Type", "application/json")
	ctx.Writer.WriteHeader(code)
	ctx.Writer.Write(data)
}

func RespondWithJson(ctx *gin.Context, code int, payload interface{}) {
	type successResponse struct {
		Errors     []interface{} `json:"errors"`
		StatusCode int           `json:"statusCode"`
		Success    bool          `json:"success"`
		Payload    interface{}   `json:"payload"`
	}

	// Create the response object
	response := successResponse{
		Errors:     []interface{}{},
		StatusCode: code,
		Success:    true,
		Payload:    payload,
	}

	// Marshal the response object to JSON
	data, err := json.Marshal(response)
	if err != nil {
		log.Printf("Failed to marshal JSON response: %v", response)
		ctx.Writer.WriteHeader(http.StatusInternalServerError)
		return
	}

	// Write the JSON response
	ctx.Writer.Header().Set("Content-Type", "application/json")
	ctx.Writer.WriteHeader(code)
	ctx.Writer.Write(data)
}
