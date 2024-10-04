package main

import (
	"log"
	"os"
	"user/server"

	"context"
	"net/http"
	"os/signal"
	"time"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func main() {

	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Fatalf("Error loading .env file")
	}

	port := os.Getenv("PORT")
	log.Printf("Port: %s", port)
	if port == "" {
		log.Fatal("PORT not found in environment")
	}

	userServer := server.NewUserHttpServer(port)
	restServer := userServer.Serve()

	// Create an HTTP server using Gin's handler
	httpServer := &http.Server{
		Addr:    "0.0.0.0:" + os.Getenv("PORT"),
		Handler: restServer,
	}

	// Create a channel to listen for interrupt signals
	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt)

	// Start the server in a separate goroutine
	go func() {
		if err := httpServer.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatalf("Server failed: %v\n", err)
		}
	}()

	// Block until a signal is received
	<-quit
	log.Println("Shutting down server...")

	// Create a context with a timeout to allow the server to shutdown gracefully
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	// Gracefully shut down the server
	if err := httpServer.Shutdown(ctx); err != nil {
		log.Fatalf("Server shutdown failed: %v", err)
	}

	log.Println("Server exited gracefully")
}
