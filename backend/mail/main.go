package main

import (
	"log"
	"mail/server"
)

func main() {
	// Run the server
	grpcServer := server.NewGrpcServer(":5051")

	if err := grpcServer.Run(); err != nil {
		log.Fatalf("Failed to run gRPC server: %v", err)
	}
}
