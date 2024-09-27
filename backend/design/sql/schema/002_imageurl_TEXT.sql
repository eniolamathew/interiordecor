-- +goose Up
ALTER TABLE Generatedimages
ALTER COLUMN imageurl TYPE TEXT;

-- +goose Down
ALTER TABLE Generatedimages
ALTER COLUMN imageurl TYPE VARCHAR(255);