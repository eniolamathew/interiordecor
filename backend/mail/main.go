package main

import (
	"log"

	"github.com/eniolamathew/interiordecor/backend/mail/server"
)

func main() {
	// Run the server
	grpcServer := server.NewGrpcServer(":5051")

	if err := grpcServer.Run(); err != nil {
		log.Fatalf("Failed to run gRPC server: %v", err)
	}
}
