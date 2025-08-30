package server

import (
	"database/sql"
	"log"
	"os"

	// "time"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"

	// Import your packages
	"design/controller"
	"design/internal/database"
	"design/repository"
	"design/route"
	"design/service"

	_ "github.com/lib/pq"
)

type userHttpServer struct {
	// addr string
}

func NewUserHttpServer(addr string) *userHttpServer {
	return &userHttpServer{}
}

// Initialize configuration and services
func (s *userHttpServer) Serve() *gin.Engine {

	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file")
	}

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

	// Ping the database to ensure connectivity
	if err := conn.Ping(); err != nil {
		log.Fatalf("Failed to ping the database: %v", err)
	}

	//Initialize API configuration
	apiCfg := repository.ApiConfig{
		DB: database.New(conn),
	}

	//Initialize repositories
	designRepo := repository.NewDesignRepo(&apiCfg)

	// Initialize services
	designService := service.NewDesignService(designRepo)

	// Initialize controllers
	designController := controller.NewDesignController(designService)

	// Initialize the Gin router
	server := gin.Default()

	baseroute := server.Group("/design")

	// Setup public routes
	route.SetupUnAuthorizedRoutes(baseroute, designController)

	// Setup protected routes
	protectedRoutes := baseroute.Group("/")
	route.SetupAuthorizedRoutes(protectedRoutes, designController)

	return server
}
