package server

import (
	"log"
	"os"
	"time"

	"github.com/eniolaogundipe/apiGateway/utils"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

type apiGatewayHttpServer struct {
	addr string
}

func NewApiGatewayHttpServer(addr string) *apiGatewayHttpServer {
	return &apiGatewayHttpServer{addr}
}

// -------------------- Main Serve --------------------
func (s *apiGatewayHttpServer) Serve() *gin.Engine {
	// Load env again (in case)
	if err := godotenv.Load(); err != nil {
		log.Println("[gateway] no .env file found, using system env")
	}

	jwtKey := os.Getenv("JWT_KEY")
	if jwtKey == "" {
		log.Fatal("JWT_KEY environment variable is missing")
	}

	// backend service URLs
	userServiceURL := os.Getenv("USER_SERVICE_URL")
	designServiceURL := os.Getenv("DESIGN_SERVICE_URL")

	if userServiceURL == "" || designServiceURL == "" {
		log.Fatal("[gateway] USER_SERVICE_URL or DESIGN_SERVICE_URL missing in env")
	}

	server := gin.Default()

	// Apply global middleware
	server.Use(utils.CORSMiddleware())
	server.Use(utils.RequestIDMiddleware())
	server.Use(utils.RateLimitMiddleware(10, time.Second))
	server.GET("/healthz", func(c *gin.Context) { c.Status(200) })
	server.GET("/readyz", func(c *gin.Context) { c.Status(200) })
	server.GET("/ping", func(c *gin.Context) { c.String(200, "pong") })

	gin.SetMode(gin.ReleaseMode)

	// ---- Setup proxies ----
	userProxy := utils.NewReverseProxy(userServiceURL)
	designProxy := utils.NewReverseProxy(designServiceURL)

	// ---- Public routes (no auth)
	server.Any("/public/user/*path", utils.ProxyForward(userProxy, 1))
	server.POST("/public/design/updatestatus", utils.ProxyForward(designProxy, 1))

	// ---- Protected routes (with JWT middleware)
	auth := server.Group("/")
	auth.Use(utils.AuthMiddleware(jwtKey))
	{
		auth.Any("/user/*path", utils.ProxyForward(userProxy, 0))
		auth.Any("/design/*path", utils.ProxyForward(designProxy, 0))
	}

	return server
}
