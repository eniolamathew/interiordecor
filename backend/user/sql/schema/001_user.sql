-- +goose Up
CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    passwordhash VARCHAR(255) NOT NULL,
    subscribed Boolean NOT NULL,
    createdat TIMESTAMP NOT NULL
);

-- +goose Down
DROP TABLE Users;