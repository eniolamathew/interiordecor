package repository

import (
	"context"
	"design/interfaces"
	"design/internal/database"
)

type ApiConfig struct {
	DB *database.Queries
}

type DesignRepo struct {
	apiCfg *ApiConfig
}

func NewDesignRepo(apiCfg *ApiConfig) interfaces.DesignInterface {
	return &DesignRepo{apiCfg: apiCfg}
}

func (repo *DesignRepo) GenerateImage(ctx context.Context, prompt string) (string, error) {
	return "", nil
}

// Implement UpdateImageStatus  Interface methods on DesignRepo struct
func (repo *DesignRepo) CreateGeneratedImage(ctx context.Context, params database.CreateGeneratedImageParams) (database.Generatedimage, error) {
	image, err := repo.apiCfg.DB.CreateGeneratedImage(ctx, params)
	return image, err
}

// Implement GetGeneratedIamgeByJobId `Interface methods on DesignRepo struct
func (repo *DesignRepo) GetGeneratedImageByJobId(ctx context.Context, jobId string) (database.Generatedimage, error) {
	image, err := repo.apiCfg.DB.GetGeneratedImageByJobId(ctx, jobId)
	return image, err
}

// Implement GetGeneratedIamgeByJobId `Interface methods on DesignRepo struct
func (repo *DesignRepo) UpdateGeneratedImageByJobId(ctx context.Context, params database.UpdateGeneratedImageByJobIdParams) (database.Generatedimage, error) {
	image, err := repo.apiCfg.DB.UpdateGeneratedImageByJobId(ctx, params)
	return image, err
}

// Implement GetGeneratedImagesByEmail `Interface methods on DesignRepo struct
func (repo *DesignRepo) GetGeneratedImagesByEmail(ctx context.Context, params database.GetGeneratedImagesByEmailParams) ([]database.Generatedimage, error) {
	images, err := repo.apiCfg.DB.GetGeneratedImagesByEmail(ctx, params)
	return images, err
}
