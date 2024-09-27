-- +goose Up
ALTER TABLE Generatedimages ADD COLUMN useremail TEXT;
UPDATE Generatedimages SET useremail = 'ogundipe.eniola@yahoo.com' WHERE useremail IS NULL;
ALTER TABLE Generatedimages ALTER COLUMN useremail SET NOT NULL;

-- +goose Down
ALTER TABLE Generatedimages DROP COLUMN useremail;