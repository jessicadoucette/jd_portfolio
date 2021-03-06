var express = require("express");
var bodyParser = require("body-parser");
// var firebase = require('firebase');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static('public'));

// Routes
// =============================================================
// require("./routes/api-routes")(app);

// Here we introduce HTML routing to serve different HTML files
require("./routes/html-routes")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log("App listening on PORT " + PORT);
});


