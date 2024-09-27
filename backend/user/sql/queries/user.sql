-- name: Validateuser :one
SELECT id, email, passwordhash, subscribed, createdat FROM users WHERE email = $1;

-- name: CreateUser :one
INSERT INTO users (email, passwordhash, subscribed, createdat) VALUES ($1, $2, $3, $4) RETURNING *;

-- name: GetUserByID :one
SELECT id, email, passwordhash, subscribed, createdat FROM users WHERE id = $1;

-- name: GetUsers :many
SELECT id, email, passwordhash, subscribed, createdat FROM users ORDER BY id;

-- name: UpdateUserPassword :one
UPDATE users SET passwordhash = $1 WHERE email = $2 RETURNING *;

-- name: GetUserByEmail :one
SELECT id, email, passwordhash FROM users WHERE email = $1;

-- name: GetUserProfileByEmail :one
SELECT id, fullname, email, useraddress, postcode FROM usersprofile WHERE email = $1;

-- name: CreateUserProfile :one
INSERT INTO usersprofile (fullname, email, useraddress, postcode) VALUES ($1, $2, $3, $4) RETURNING *;

-- name: UpdateUserProfile :one
UPDATE usersprofile SET fullname = $1, useraddress = $2, postcode = $3 WHERE email = $4 RETURNING *;
