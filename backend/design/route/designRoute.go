package route

import (
	"design/controller"

	"github.com/gin-gonic/gin"
)

func SetupUnAuthorizedRoutes(server *gin.RouterGroup, designController *controller.DesignController) {
	server.POST("/updatestatus", designController.UpdateImageStatus)
}

func SetupAuthorizedRoutes(authorized *gin.RouterGroup, designController *controller.DesignController) {
	authorized.POST("/generate", designController.GenerateImage)
	authorized.GET("/getgeneratedimage/:jobId", designController.GetGeneratedImageByJobId)
	authorized.GET("/getimagesbyemail/:email", designController.GetGeneratedImagesByEmail)
}
