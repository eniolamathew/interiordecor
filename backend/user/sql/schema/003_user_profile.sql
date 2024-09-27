-- +goose Up
CREATE TABLE UsersProfile (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    useraddress VARCHAR(255) NOT NULL,
    postcode VARCHAR(255) NOT NULL,
    CONSTRAINT fk_user_email FOREIGN KEY (email) REFERENCES Users(email)
);

-- +goose Down
DROP TABLE UsersProfile;