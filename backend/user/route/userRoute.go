package route

import (
	"user/controller"

	"github.com/gin-gonic/gin"
)

func SetupUnAuthorizedRoutes(server *gin.RouterGroup, userController *controller.UserController) {
	server.POST("/signup", userController.SignupUserHandler)
	server.POST("/login", userController.LoginUserHandler)
	server.POST("/requestpasswordreset", userController.RequestPasswordReset)
	server.POST("/resetpassword", userController.ResetPassword)
}

func SetupAuthorizedRoutes(authorized *gin.RouterGroup, userController *controller.UserController) {
	authorized.GET("/users", userController.GetUsers)
	authorized.GET("/user/:id", userController.GetUserById)
	authorized.GET("/getusersbyids", userController.GetUsersByIds)
	authorized.POST("/userprofile", userController.UserProfile)
	authorized.PUT("/updateuserprofile", userController.UpdateUserProfile)
	authorized.POST("/changepassword", userController.ChangePassword)
	authorized.GET("/userprofilebyemail", userController.GetUserProfileByEmail)
}
