-- +goose Up
CREATE TABLE Generatedimages (
    id SERIAL PRIMARY KEY,
    imageurl VARCHAR(255) NOT NULL,
    jobid VARCHAR(255) NOT NULL UNIQUE,
    imagestatus VARCHAR(255) NOT NULL
);

-- +goose Down
DROP TABLE Generatedimages;