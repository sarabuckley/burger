// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

// Set the port of our application - process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Creates an express App
var app = express();

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them 
var routes = require("./controllers/burgers_controller.js");

app.use(routes);
//app.use("routes");

// Start our server so that it can begin listening to client requests
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
