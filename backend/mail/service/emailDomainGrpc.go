package service

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	mail "github.com/eniolamathew/interiordecor/backend/mail/protoc"

	"github.com/joho/godotenv"
	"github.com/mailgun/mailgun-go/v4"
	"google.golang.org/grpc"
)

type EmailServer struct {
	mail.UnimplementedEmailServiceServer
}

func NewEmailServer(grpcServer *grpc.Server) {
	grpcHandlers := &EmailServer{}

	// Register the grpcServer
	mail.RegisterEmailServiceServer(grpcServer, grpcHandlers)
}

func (es *EmailServer) SendPasswordResetEmail(ctx context.Context, req *mail.SendPasswordResetRequest) (*mail.SendEmailResponse, error) {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatalf("Error loading .env file: %v", err)
	}
	domain := os.Getenv("DOMAIN")
	privateAPIKey := os.Getenv("MAILGUN_API_KEY")

	sender := "no-reply@roomify.org"

	mg := mailgun.NewMailgun(domain, privateAPIKey)

	htmlContent, err := os.ReadFile("emailTemplates/PasswordReset.html")
	if err != nil {
		log.Fatalf("failed to read HTML template: %v", err)
	}

	// Define email details
	subject := "Password Reset Request"
	body := fmt.Sprintf(string(htmlContent), req.Email, req.ResetToken)

	// Send the message with a 10-second timeout
	ctx, cancel := context.WithTimeout(ctx, time.Second*10)
	defer cancel()

	// Create message
	message := mg.NewMessage(sender, subject, "", req.Email)
	message.SetHtml(body)

	_, _, errr := mg.Send(ctx, message)
	if errr != nil {
		return nil, fmt.Errorf("failed to send email: %w", errr)
	}

	return &mail.SendEmailResponse{
		Message: "Password reset email sent successfully",
	}, nil
}
