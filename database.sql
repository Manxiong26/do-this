
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
    "user_email" VARCHAR (255) NOT NULL,
    "user_zip" VARCHAR (255) NOT NULL,
    "distance" VARCHAR (255) NOT NULL,
    "physical" VARCHAR (255) NOT NULL,
    "hobbies" VARCHAR (255) NOT NULL
);