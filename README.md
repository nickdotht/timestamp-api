# FreeCodeCamp - Timestamp Microservice

The first API project for the Back End Development Certification on [FreeCodeCamp](https://freecodecamp.com). It uses Nodejs and Expressjs to return, as a JSON object, the Unix timestamp and the natural representation of a date string passed to it.

## TOC

- [Demo](#demo)
- [Project Description](#project-description)
	- [Example Usage:](#example-usage)
	- [Example output:](#example-output)
- [Project installation](#project-installation)
	- [Requirements](#requirements)
	- [I want to test it locally](#i-want-to-test-it-locally)
	- [I want to try this project by myself](#i-want-to-try-this-project-by-myself)
		- [What you need to know before starting](#what-you-need-to-know-before-starting)
		- [What you'll learn from this](#what-youll-learn-from-this)
- [Issues](#issues)

## Demo
[Click here](https://timestamp-api-r4meau.herokuapp.com/) to see the demo hosted on Heroku.

## Project Description

Objective: Build a full stack JavaScript app that is functionally similar to [this](https://timestamp-ms.herokuapp.com/) and deploy it to Heroku.

User stories:

1. I can pass a string as a parameter, and it will check to see whether that string contains
either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

### Example Usage:

[https://timestamp-api-r4meau.herokuapp.com/December%2015,%202015](https://timestamp-api-r4meau.herokuapp.com/December%2015,%202015)

[https://timestamp-api-r4meau.herokuapp.com/1450137600](https://timestamp-api-r4meau.herokuapp.com/1450137600)

### Example output:

	{ "unix": 1450137600, "natural": "December 15, 2015" }

## Project installation

Although there is a [demo](https://timestamp-api-r4meau.herokuapp.com) online, if you want to try this project by yourself or you just want to test it locally, feel free to keep reading.

### Requirements

For this project, you'll need:
* [Nodejs and NPM](https://nodejs.org/en/).
* [Git](https://git-scm.com/)

### I want to test it locally

Alrighty, First, clone/download this repo on your computer and `cd` into it:

	git clone http://github.com/r4meau/timestamp-api

	cd timestamp-api

Then install the necessary packages:

	npm install

Now run the server:

	npm start

That's it! Now go to [http://localhost:8080](http://localhost:8080) and test it.

### I want to try this project by myself

Great, I really recommend you to create an account on [FreeCodeCamp](https://freecodecamp.com) and get started there if you are a total beginner, but read on to get started.

#### What you need to know before starting

This is a beginner to intermediate Nodejs project so it's assuming you know how to:

* [code in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction). More precisely on the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object.
* [setup a server with Nodejs and Expressjs](https://expressjs.com/en/starter/hello-world.html)
* [handle basic get requests with Expressjs](https://expressjs.com/en/starter/basic-routing.html)
* [handle basic templating with EJS](https://scotch.io/tutorials/use-ejs-to-template-your-node-application). You might like [how I do it](https://github.com/R4meau/timestamp-api/blob/master/server.js#L5) ;)

Alrighty, if you're ready, read the [project description](#project-description) and start away, if you think you're still not ready, make sure you do more research on the same subjects.

#### What you'll learn from this

You'll get better understanding of the Expressjs framework, the Date Object of JavaScript and just a simple introduction to [RESTful API](https://devcenter.heroku.com/articles/mean-apps-restful-api) Development.

So when you're done, I encourage you to sign up to [FreeCodeCamp](https://freecodecamp.com) and do more of those projects to get better at Back end Web Development. Don't forget to submit your project on there.

Or [send it to me](mailto:nick@rameau.me), I don't mind at all.

## Issues

If you're having any problem with my code, [just leave an issue](https://github.com/R4meau/timestamp-api/issues) and I'll reply as soon as possible.

Enjoy.
