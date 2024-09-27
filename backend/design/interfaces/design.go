package interfaces

import (
	"context"
	"design/internal/database"
)

type DesignInterface interface {
	GenerateImage(ctx context.Context, prompt string) (string, error)
	CreateGeneratedImage(ctx context.Context, params database.CreateGeneratedImageParams) (database.Generatedimage, error)
	GetGeneratedImageByJobId(ctx context.Context, jobId string) (database.Generatedimage, error)
	UpdateGeneratedImageByJobId(ctx context.Context, params database.UpdateGeneratedImageByJobIdParams) (database.Generatedimage, error)
	GetGeneratedImagesByEmail(ctx context.Context, params database.GetGeneratedImagesByEmailParams) ([]database.Generatedimage, error)
}
