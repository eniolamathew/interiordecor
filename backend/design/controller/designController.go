package controller

import (
	"design/model"
	"design/service"
	"design/utils"
	validation "design/validation"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
)

var Status = make(map[string]string)

type DesignController struct {
	service   service.DesignServiceInterface
	validator *validator.Validate
}

func NewDesignController(service service.DesignServiceInterface) *DesignController {
	return &DesignController{service: service, validator: validator.New()}
}

// GenerateImage Handler
func (ctrl *DesignController) GenerateImage(ctx *gin.Context) {
	// Register custom validations defined in your validation package
	validation.RegisterDesignValidations(ctrl.validator)

	var generatepayload model.Generate

	if err := ctx.ShouldBindJSON(&generatepayload); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid input")
		return
	}

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(generatepayload); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessage(e)
		}

		utils.RespondWithError(ctx, http.StatusBadRequest, errorMessages)
		return
	}

	// Call the service layer
	jobId, err := ctrl.service.GenerateImage(ctx, generatepayload)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Respond with token
	utils.RespondWithJson(ctx, http.StatusOK, map[string]interface{}{
		"jobId": jobId,
	})
}

// UpdateImageStatus handles updates to the image generation job status
func (ctrl *DesignController) UpdateImageStatus(ctx *gin.Context) {
	var payload struct {
		JobId    string `json:"jobId"`
		ImageURL string `json:"imageURL"`
	}

	// Bind the JSON payload to the struct
	if err := ctx.ShouldBindJSON(&payload); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, map[string]interface{}{
			"message": "Invalid request",
		})
		return
	}

	// Update the status map with the jobID and imageURL
	Status[payload.JobId] = payload.ImageURL

	// Call the service layer
	_, err := ctrl.service.CreateGeneratedImage(ctx, payload.JobId, payload.ImageURL)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Send a response to acknowledge the update
	utils.RespondWithJson(ctx, http.StatusOK, map[string]interface{}{
		"message": "ImageUrl Created",
	})
}

func (ctrl *DesignController) GetGeneratedImageByJobId(ctx *gin.Context) {
	jobId := ctx.Param("jobId")

	generatedImage, err := ctrl.service.GetGeneratedImageByJobId(ctx, jobId)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Send a response to acknowledge the update
	utils.RespondWithJson(ctx, http.StatusOK, generatedImage)
}

func (ctrl *DesignController) GetGeneratedImagesByEmail(ctx *gin.Context) {
	email := ctx.Param("email")

	emailRequest := model.EmailRequest{Email: email}

	validation.RegisterDesignValidations(ctrl.validator)

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(emailRequest); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessage(e)
		}

		utils.RespondWithError(ctx, http.StatusBadRequest, errorMessages)
		return
	}

	generatedImage, err := ctrl.service.GetGeneratedImagesByEmail(ctx, email)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Send a response to acknowledge the update
	utils.RespondWithJson(ctx, http.StatusOK, generatedImage)
}
