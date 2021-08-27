# Prime Solo Project DoThis

This web app is created for Minnesotan users who love to do activities on the weekend or want to do activities on the weekend but is unsure on what to do. With this app, random task will generate for users to do on the that day. There are reject and accept buttons for users to either accept and the task gets added on to their task list or reject the task to get a new task.

Other features in this app is, having the ability to add a note in that particular task and edit that note if later on users remember something else write something else in there. Users can also delete tasks they no longer want in their task list or simply just didn't want to do the task after accepting it.

****** disclaimer ********
background image does not belong to me

# WireFrames
DoThis App

![Show DoThis App](Pictures/DoThisVid.gif)


# EDA Project
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `do_this` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "user_email" VARCHAR (255) NOT NULL
);
```
Other required tables are in the database.sql folder.


## Development Setup Instructions

- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

