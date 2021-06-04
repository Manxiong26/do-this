
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
   "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "user_email" VARCHAR (255) NOT NULL
);

CREATE TABLE "task" (
    "id" SERIAL PRIMARY KEY,
    "location_id" VARCHAR (100000),
    "name_task" VARCHAR (1000) NOT NULL,
    "task_description" VARCHAR (10000) NOT NULL
);

CREATE TABLE "task_user" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "task_id" INT REFERENCES "task" NOT NULL,
    "completed" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR (100000),
    "image" VARCHAR (10000)
);
