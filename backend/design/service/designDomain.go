package service

import (
	"context"
	"design/interfaces"
	"design/internal/database"
	"design/kafka"
	"design/model"
	"encoding/json"
	"fmt"

	"github.com/google/uuid"
)

// DesignServiceInterface defines the contract for user service methods.
type DesignServiceInterface interface {
	GenerateImage(ctx context.Context, params model.Generate) (string, error)
	CreateGeneratedImage(ctx context.Context, jobId, imageUrl string) (database.Generatedimage, error)
	GetGeneratedImageByJobId(ctx context.Context, jobId string) (database.Generatedimage, error)
	GetGeneratedImagesByEmail(ctx context.Context, email string) ([]database.Generatedimage, error)
}

type DesignService struct {
	repo interfaces.DesignInterface
}

// NewDesignService creates a new DesignService with the given dependencies.
func NewDesignService(repo interfaces.DesignInterface) DesignServiceInterface {
	return &DesignService{repo: repo}
}

func (s *DesignService) GenerateImage(ctx context.Context, params model.Generate) (string, error) {
	// Generate a unique jobID
	jobId := uuid.New().String()

	_, err := s.repo.CreateGeneratedImage(ctx, database.CreateGeneratedImageParams{
		Imageurl:    "",
		Jobid:       jobId,
		Imagestatus: "pending",
		Useremail:   params.Email,
	})
	if err != nil {
		return "", fmt.Errorf("failed to create a pending generated imag")
	}

	formattedPrompt := fmt.Sprintf(
		"Create a photorealistic image of a %s style (%s interior) that has the attributes of wall color of %s and description of %s and bright lighting.",
		params.Style,
		params.Roomtype,
		params.Color,
		params.Description,
	)

	// Combine jobID and the formatted prompt as a message to Kafka
	kafkaMessage := struct {
		JobId  string `json:"jobId"`
		Prompt string `json:"prompt"`
	}{
		JobId:  jobId,
		Prompt: formattedPrompt,
	}

	// Serialize the final message (JobId + prompt) to JSON
	kafkaMessageData, err := json.Marshal(kafkaMessage)
	if err != nil {
		return "", fmt.Errorf("error marshalling Kafka message to JSON: %w", err)
	}

	// Send the JSON string to Kafka
	kafkaPayload := string(kafkaMessageData)
	event := kafka.NewKafkaDomain(kafkaPayload)
	if err := event.Run(); err != nil {
		return "", fmt.Errorf("failed to send message to Kafka: %w", err)
	}

	// Return the generated jobID
	return jobId, nil
}

// CreateGeneratedImage handles updates to the image generation and status
func (s *DesignService) CreateGeneratedImage(ctx context.Context, jobId, imageUrl string) (database.Generatedimage, error) {
	status := "pending"
	if imageUrl != "" {
		status = "complete"
	}

	generatedImage, err := s.repo.UpdateGeneratedImageByJobId(ctx, database.UpdateGeneratedImageByJobIdParams{
		Jobid:       jobId,
		Imageurl:    imageUrl,
		Imagestatus: status,
	})
	if err != nil {
		return database.Generatedimage{}, fmt.Errorf("failed to create generated image: %w", err)
	}

	fmt.Println("Generated image created:", generatedImage)

	return generatedImage, nil
}

func (s *DesignService) GetGeneratedImageByJobId(ctx context.Context, jobId string) (database.Generatedimage, error) {

	generatedImage, err := s.repo.GetGeneratedImageByJobId(ctx, jobId)
	if err != nil {
		return database.Generatedimage{}, fmt.Errorf("failed to fetch generated image: %w", err)
	}

	return generatedImage, nil
}

func (s *DesignService) GetGeneratedImagesByEmail(ctx context.Context, email string) ([]database.Generatedimage, error) {
	params := database.GetGeneratedImagesByEmailParams{
		Useremail:   email,
		Imagestatus: "complete",
	}

	generatedImages, err := s.repo.GetGeneratedImagesByEmail(ctx, params)
	if err != nil {
		return []database.Generatedimage{}, fmt.Errorf("failed to fetch users generated images")
	}

	return generatedImages, nil
}
