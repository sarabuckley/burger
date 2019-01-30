// *********************************************************************************
// burgers_controller.js - this file is part of the MVC pattern and so acts as the glue between models and views
// Here we call our models to get the data and put that data on our views.
// Models - the part that deals with the database.
// Views - everything the user will see.
//
// Routing refers to how an application’s endpoints (URIs) respond to client requests.
//
// Router is a method of the Express app object that correspond to HTTP methods; for example, app.get() to handle GET requests and app.post to handle POST requests. 
//
// *********************************************************************************

// Dependencies
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.put("/api/burgers/:id", function (req, res) {
  var isEaten = "id = " + req.params.id;
  burger.updateOne(
    { devoured: req.body.devoured },
    isEaten, function (result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end()
      }
    });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(
    ["burger_name"],
    [req.body.name],
    function (result) {
      // Send back the ID of the new quote
      res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
