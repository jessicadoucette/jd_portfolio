// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
	});
	
	app.get("/word-guess", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/homework3.html"));
	});

	app.get("/crystal-collector", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/homework4.html"));
	});

	app.get("/stranger-things-trivia", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/homework5.html"));
	});

	app.get("/sundance-giftastic", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/homework6.html"));
	});

	app.get("/train-scheduler", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/homework7.html"));
	});

	app.get("/food-with-friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/project1.html"));
	});

	app.get("/dog-finder", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/dogFinder.html"));
	});

	app.get("/lets-talk-about-it-app", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/chatApp.html"));
	});

	app.get("/about", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/about.html"));
	});


	app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/contact.html"));
	});
	



};
