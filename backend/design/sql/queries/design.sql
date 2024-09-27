-- name: CreateGeneratedImage :one
INSERT INTO generatedimages (imageurl, jobid, imagestatus, useremail) VALUES ($1, $2, $3, $4) RETURNING *;

-- name: GetGeneratedImageByJobId :one
SELECT id, imageurl, jobid, imagestatus, useremail FROM generatedimages WHERE jobid = $1;

-- name: UpdateGeneratedImageByJobId :one
UPDATE Generatedimages SET imageurl = $2, imagestatus = $3 WHERE jobid = $1 RETURNING *;

-- name: GetGeneratedImagesByEmail :many
SELECT id, imageurl, jobid, imagestatus, useremail FROM generatedimages WHERE useremail = $1 AND imagestatus = $2;