// Include ORM here to allow program access to ORM requests to the database
var orm = require("../config/orm.js");

// List all the burgers stored in burger_db.

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
       
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objVal, isEaten, cb) {
        orm.updateOne("burgers", objVal, isEaten, function(res) {
            cb(res);
        });
    }   
};            

// Export the object returned from the database to burgers_controller.js
module.exports = burger;

