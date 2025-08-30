package server

import (
	"database/sql"
	"log"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	"user/controller"
	"user/internal/database"
	"user/repository"
	"user/route"
	"user/service"

	mailprotoc "github.com/eniolamathew/interiordecor/backend/mail/protoc" // import your generated mail package

	_ "github.com/lib/pq"
)

type userHttpServer struct {
	addr string
}

func NewUserHttpServer(addr string) *userHttpServer {
	return &userHttpServer{addr}
}

// NewGrpcEmailClient connects to the mail gRPC service and returns the client
func NewGrpcEmailClient(addr string) mailprotoc.EmailServiceClient {
	conn, err := grpc.Dial(addr, grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalf("Failed to connect to mail service: %v", err)
	}

	return mailprotoc.NewEmailServiceClient(conn)
}

// Initialize configuration and services
func (s *userHttpServer) Serve() *gin.Engine {

	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file")
	}

	emailGrpcPort := os.Getenv("EMAIL_GRPC_PORT")
	if emailGrpcPort == "" {
		log.Fatal("EMAIL_GRPC_PORT environment variable is missing")
	}

	// Create mail client
	mailClient := NewGrpcEmailClient(emailGrpcPort)

	// Read environment variables
	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("PORT environment variable is missing")
	}

	dbURL := os.Getenv("DATABASE_URL")
	if dbURL == "" {
		log.Fatal("DATABASE_URL environment variable is missing")
	}

	jwtKey := os.Getenv("JWT_KEY")
	if jwtKey == "" {
		log.Fatal("JWT_KEY environment variable is missing")
	}

	// Setup database connection
	conn, err := sql.Open("postgres", dbURL)
	if err != nil {
		log.Fatalf("Failed to connect to the database: %v", err)
	}
	if err := conn.Ping(); err != nil {
		log.Fatalf("Failed to ping the database: %v", err)
	}

	// Initialize API configuration
	apiCfg := repository.ApiConfig{
		DB: database.New(conn),
	}

	// Initialize repositories
	userRepo := repository.NewUserRepo(&apiCfg)

	// Initialize services with injected mail client
	userService := service.NewUserService(userRepo, []byte(jwtKey), mailClient)

	// Initialize controllers
	userController := controller.NewUserController(userService)

	// Initialize the Gin router
	server := gin.Default()

	baseroute := server.Group("/user")

	// Setup public routes
	route.SetupUnAuthorizedRoutes(baseroute, userController)

	// Setup protected routes
	protectedRoutes := baseroute.Group("/")
	route.SetupAuthorizedRoutes(protectedRoutes, userController)

	return server
}
