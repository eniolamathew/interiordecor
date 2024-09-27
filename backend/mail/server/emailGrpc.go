package server

import (
	"log"
	"mail/service"
	"net"

	"google.golang.org/grpc"
)

type grpcServer struct {
	port string
}

func NewGrpcServer(port string) *grpcServer {
	return &grpcServer{port: port}
}

func (s *grpcServer) Run() error {
	// Listen on the specified port
	lis, err := net.Listen("tcp", s.port)
	if err != nil {
		return err
	}

	// Create a new gRPC server
	grpcServer := grpc.NewServer()

	// Register the Email service with the gRPC server
	service.NewEmailServer(grpcServer)

	log.Printf("gRPC server is up and listening on %s", s.port)

	// Start serving the gRPC server
	return grpcServer.Serve(lis) 
}