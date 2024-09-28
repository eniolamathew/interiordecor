package controller

import (
	"errors"
	"fmt"
	"log"
	"net/http"
	"strconv"
	"user/model"
	"user/service"
	"user/utils"
	validation "user/validation"
	"user/view"

	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"github.com/lib/pq"
)

type UserController struct {
	service   service.UserServiceInterface
	validator *validator.Validate
}

func NewUserController(service service.UserServiceInterface) *UserController {
	return &UserController{service: service, validator: validator.New()}
}

// loginHandler handles user login and JWT generation
func (ctrl *UserController) LoginUserHandler(ctx *gin.Context) {
	// Register custom validations defined in your validation package
	validation.RegisterUserValidations(ctrl.validator)

	var loginUser model.LoginUser

	if err := ctx.ShouldBindJSON(&loginUser); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid input")
		return
	}

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(loginUser); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessageForField(e)
		}

		utils.RespondWithError(ctx, http.StatusInternalServerError, errorMessages)
		return
	}

	// Call the service layer
	token, isConfirmed, err := ctrl.service.UserLogin(ctx, loginUser.Email, loginUser.Password)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	if !isConfirmed {
		utils.RespondWithError(ctx, http.StatusUnauthorized, "Invalid Password")
		return
	}

	// Respond with token
	utils.RespondWithJson(ctx, http.StatusOK, map[string]interface{}{
		"accesstoken":     token,
		"isUserConfirmed": isConfirmed,
	})
}

func (ctrl *UserController) SignupUserHandler(ctx *gin.Context) {
	// Register custom validations defined in your validation package
	validation.RegisterUserValidations(ctrl.validator)

	var user model.CreateUser

	if err := ctx.ShouldBindJSON(&user); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid input")
		return
	}

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(user); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessageForField(e)
		}

		utils.RespondWithError(ctx, http.StatusInternalServerError, errorMessages)
		return
	}

	// Call the service layer

	message, err := ctrl.service.RegisterUser(ctx, user)
	if err != nil {
		unwrappedErr := errors.Unwrap(err)

		// Check if the unwrapped error is a PostgreSQL error
		if pgErr, ok := unwrappedErr.(*pq.Error); ok {
			if pgErr.Code == "23505" {
				fmt.Printf("Error type: %T\n", unwrappedErr)
				utils.RespondWithError(ctx, http.StatusConflict, "user with this email already exists")
				return
			}
		}

		// Handle other errors
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Respond with success message
	utils.RespondWithJson(ctx, http.StatusOK, map[string]interface{}{
		"message": message,
	})
}

func (ctrl *UserController) GetUserById(ctx *gin.Context) {
	id := ctx.Param("id")

	userId, err := strconv.Atoi(id)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid user Id")
		return
	}

	// Call the service layer
	userDTO, err := ctrl.service.GetUserByID(ctx, int32(userId), "byUserDto")
	if err != nil {
		utils.RespondWithError(ctx, http.StatusNotFound, "User not found")
		return
	}

	// Respond with the user DTO
	utils.RespondWithJson(ctx, http.StatusOK, userDTO)
}

// GetUsers returns a list of users
func (ctrl *UserController) GetUsers(ctx *gin.Context) {
	queryParams := ctx.Request.URL.Query()

	var options *utils.QueryOptions
	if len(queryParams) != 0 {
		// Parse query parameters into QueryOptions
		options = &utils.QueryOptions{
			TableName:  "users",
			Columns:    []string{"id", "email", "passwordhash", "subscribed", "createdat"},
			Filters:    utils.ParseFilters(queryParams),
			Properties: utils.ParseProperties(queryParams),
			Sorting: utils.Sorting{
				SortBy:        queryParams.Get("sortBy"),
				SortAscending: queryParams.Get("sortAscending") != "false",
			},
			Paging: utils.Paging{
				PageSize: utils.ParseInt(queryParams.Get("paging.pageSize"), 25),
				PageNo:   utils.ParseInt(queryParams.Get("paging.pageNo"), 1),
			},
		}
	}

	// Call the service layer to get users
	users, err := ctrl.service.GetUsers(ctx, options)
	if err != nil {
		log.Println("Failed to execute query:", err)
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Convert to DTOs
	userdtos := view.ToUsersDTOs(users)

	// Send response
	utils.RespondWithJson(ctx, http.StatusOK, userdtos)
}

func (ctrl *UserController) GetUsersByIds(ctx *gin.Context) {
	var userIDs []int

	// Iterate over the expected query parameters
	for i := 0; ; i++ {
		key := fmt.Sprintf("ids[%d]", i)
		idStr := ctx.Query(key)

		// If the key doesn't exist, break the loop
		if idStr == "" {
			break
		}

		id, err := strconv.Atoi(idStr)
		if err != nil {
			utils.RespondWithError(ctx, http.StatusInternalServerError, fmt.Sprintf("Invalid id: %s", idStr))
			return
		}

		userIDs = append(userIDs, id)
	}

	// Call the service to get users by IDs
	usersData, err := ctrl.service.GetUsersByIds(ctx, userIDs)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Respond with the list of users
	utils.RespondWithJson(ctx, http.StatusOK, usersData)
}

// loginHandler handles user login and JWT generation
func (ctrl *UserController) RequestPasswordReset(ctx *gin.Context) {
	// Register custom validations defined in your validation package
	validation.RegisterUserValidations(ctrl.validator)

	var userDetails model.RequestPasswordReset

	if err := ctx.ShouldBindJSON(&userDetails); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid input")
		return
	}

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(userDetails); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessageForField(e)
		}

		utils.RespondWithError(ctx, http.StatusInternalServerError, errorMessages)
		return
	}

	// Call the service layer
	_, err := ctrl.service.RequestPasswordReset(ctx, userDetails.Email)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusUnauthorized, err.Error())
		return
	}

	// Respond with token
	utils.RespondWithJson(ctx, http.StatusOK, "Password reset email sent successfully")
}

func (ctrl *UserController) ResetPassword(ctx *gin.Context) {
	// Register validation
	validation.RegisterUserValidations((ctrl.validator))

	var userpassword model.ResetUserPassword

	if err := ctx.ShouldBindJSON(&userpassword); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid input")
		return
	}

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(userpassword); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessageForField(e)
		}

		utils.RespondWithError(ctx, http.StatusInternalServerError, errorMessages)
	}

	// Call the service layer

	message, err := ctrl.service.UpdateUserPassword(ctx, userpassword)
	if err != nil {
		unwrappedErr := errors.Unwrap(err)

		// Check if the unwrapped error is a PostgreSQL error
		if pgErr, ok := unwrappedErr.(*pq.Error); ok {
			if pgErr.Code == "23505" {
				fmt.Printf("Error type: %T\n", unwrappedErr)
				utils.RespondWithError(ctx, http.StatusConflict, "user with this email already exists")
				return
			}
		}

		// Handle other errors
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Respond with success message
	utils.RespondWithJson(ctx, http.StatusOK, map[string]interface{}{
		"message": message,
	})
}

func (ctrl *UserController) ChangePassword(ctx *gin.Context) {
	// Register validation
	validation.RegisterUserValidations((ctrl.validator))

	var changepassword model.ChangeUserPassword

	if err := ctx.ShouldBindJSON(&changepassword); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid input")
		return
	}

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(changepassword); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessageForField(e)
		}

		utils.RespondWithError(ctx, http.StatusInternalServerError, errorMessages)
	}

	message, err := ctrl.service.ChangeUserPassword(ctx, changepassword)
	if err != nil {
		// Handle other errors
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Respond with success message
	utils.RespondWithJson(ctx, http.StatusOK, map[string]interface{}{
		"message": message,
	})
}


func (ctrl *UserController) UserProfile(ctx *gin.Context) {
	// Register validation
	validation.RegisterUserValidations((ctrl.validator))

	var userprofile model.UserProfile

	if err := ctx.ShouldBindJSON(&userprofile); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid input")
		return
	}

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(userprofile); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessageForField(e)
		}

		utils.RespondWithError(ctx, http.StatusInternalServerError, errorMessages)
	}

	// Call the service layer
	message, err := ctrl.service.UserProfile(ctx, userprofile)
	if err != nil {
		// Handle other errors
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Respond with success message
	utils.RespondWithJson(ctx, http.StatusOK, map[string]interface{}{
		"message": message,
	})
}

func (ctrl *UserController) UpdateUserProfile(ctx *gin.Context) {
	// Register validation
	validation.RegisterUserValidations((ctrl.validator))

	var userprofile model.UserProfile

	if err := ctx.ShouldBindJSON(&userprofile); err != nil {
		utils.RespondWithError(ctx, http.StatusBadRequest, "Invalid input")
		return
	}

	// Validate the payload using the registered validator
	if err := ctrl.validator.Struct(userprofile); err != nil {
		errs := err.(validator.ValidationErrors)
		errorMessages := make(map[string]string)

		for _, e := range errs {
			errorMessages[e.Field()] = validation.GetErrorMessageForField(e)
		}

		utils.RespondWithError(ctx, http.StatusInternalServerError, errorMessages)
	}

	// Call the service layer
	message, err := ctrl.service.UpdateUserProfile(ctx, userprofile)
	if err != nil {
		// Handle other errors
		utils.RespondWithError(ctx, http.StatusInternalServerError, err.Error())
		return
	}

	// Respond with success message
	utils.RespondWithJson(ctx, http.StatusOK, map[string]interface{}{
		"message": message,
	})
}

func (ctrl *UserController) GetUserProfileByEmail(ctx *gin.Context) {
	userEmail := ctx.Query("email")

	// Call the service layer
	userDTO, err := ctrl.service.GetUserProfileByEmail(ctx, userEmail)
	if err != nil {
		utils.RespondWithError(ctx, http.StatusNotFound, "User profile not found")
		return
	}

	// Respond with the user DTO
	utils.RespondWithJson(ctx, http.StatusOK, userDTO)
}