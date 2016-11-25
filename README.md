# FreeCodeCamp - Timestamp Microservice

The first API project for the Back End Development Certification on [FreeCodeCamp](https://freecodecamp.com). It uses Nodejs, Expressjs and EJS to return, as a JSON object, the Unix timestamp and the natural representation of a date string passed to it.

## Demo
[Click here](https://timestamp-api-r4meau.herokuapp.com/) to see the demo hosted on Heroku.

## Project Description

Objective: Build a full stack JavaScript app that is functionally similar to [this](https://timestamp-ms.herokuapp.com/) and deploy it to Heroku.

User stories:

1. I can pass a string as a parameter, and it will check to see whether that string contains
either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example usage:

[https://timestamp-api-r4meau.herokuapp.com/December%2015,%202015](https://timestamp-api-r4meau.herokuapp.com/December%2015,%202015)

[https://timestamp-api-r4meau.herokuapp.com/1450137600](https://timestamp-api-r4meau.herokuapp.com/1450137600)

### Example output:

	{ "unix": 1450137600, "natural": "December 15, 2015" }

## Project installation

Although there is a demo online, if you really want to run it locally, just keep reading.

### Requirements

For this project, you only need [Nodejs and NPM](https://nodejs.org/en/) installed.

### Installation

First, clone/download this repo on your computer and `cd` into it:

	git clone http://github.com/r4meau/timestamp-api

	cd timestamp-api

Then install the necessary packages:

	npm install

Now run the server:

	npm start

That's it! Now go to [http://localhost:8080](http://localhost:8080) and test it.

Enjoy.
