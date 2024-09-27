package server

import (
	"database/sql"
	"log"
	"os"

	// "time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	// Import your packages
	"user/controller"
	"user/internal/database"
	"user/repository"
	"user/route"
	"user/service"
	"user/utils"

	_ "github.com/lib/pq"
)

type userHttpServer struct {
	addr string
}

func NewUserHttpServer(addr string) *userHttpServer {
	return &userHttpServer{addr}
}

func NewGrpcEmailClient(addr string) *grpc.ClientConn {
	// Attempt to connect to the gRPC server
	conn, err := grpc.NewClient("interior_mail_container:5051", grpc.WithTransportCredentials(insecure.NewCredentials()))
	// conn, err := grpc.NewClient("localhost:5051", grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Printf("Failed to connect to mail service: %v", err)
		return nil
	}

	return conn
}

// Initialize configuration and services
func (s *userHttpServer) Serve() *gin.Engine {

	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file")
	}

	emailGrpcPort := os.Getenv("EMAIL_GRPC_PORT")

	grpcConn := NewGrpcEmailClient(emailGrpcPort)

	// defer grpcConn.Close()
	if grpcConn == nil {
		log.Printf("Failed to connect to mail service")
		grpcConn.Close()
	}

	// Read environment variables
	port := os.Getenv("PORT")

	if port == "" {
		log.Fatal("PORT environment variable is missing")
	}

	dbURL := os.Getenv("DB_URL")
	if dbURL == "" {
		log.Fatal("DB_URL environment variable is missing")
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
	// Ping the database to ensure connectivity
	if err := conn.Ping(); err != nil {
		log.Fatalf("Failed to ping the database: %v", err)
	}

	// Initialize API configuration
	apiCfg := repository.ApiConfig{
		DB: database.New(conn),
	}

	// Initialize repositories
	userRepo := repository.NewUserRepo(&apiCfg)

	// Initialize services
	userService := service.NewUserService(userRepo, []byte(jwtKey), grpcConn)

	// Initialize controllers
	userController := controller.NewUserController(userService)

	// Initialize the Gin router
	server := gin.Default()
	server.Use(utils.CORSMiddleware())

	// Setup public routes
	route.SetupUnAuthorizedRoutes(server, userController)

	// Setup protected routes
	authorized := server.Group("/api")
	authorized.Use(utils.AuthMiddleware())
	server.Use(utils.TrustedProxyMiddleware())
	route.SetupAuthorizedRoutes(authorized, userController)

	return server
}
