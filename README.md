# Eat Da Burger!
A guilt-free way to consume burgers using Node.js/Express/Handlebars/MySQL

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and the backend implemented with Node.js and Express using a MySQL database. The MVC framework is used to structure the codebase.

The screen lists all burgers that are available to be eaten and all burgers that have already been consumed. The  user can add burgers to the menu by entering it in the input box and hitting the "Order' button. This will add the item to the database. The user can also eat any burger by clicking on the "Devour It" button next to the chosen item. This will cause the item to be moved to the adjacent "Gone" column. Its eaten status will be then be updated in the database.

## Demo

The demo of the burger eating application can be found [here](https://warm-springs-64790.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command.

	git clone https://github.com/sarabuckley/burger.git
	
Next, install the application dependencies.

	cd burger
	npm install
	
Finally, run the node server locally.

	node server
	
Now, open the local application on port 8080 at the URL: `http://localhost:8080/`.

**Enjoy and have a burger!**




