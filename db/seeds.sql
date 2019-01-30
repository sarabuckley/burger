DROP DATABASE IF EXISTS burgers_db ;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL DEFAULT FALSE,
	PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ('Double Bacon Cheeseburger');

INSERT INTO burgers (burger_name) VALUES ('Veggie Burger');

INSERT INTO burgers (burger_name) VALUES ('Fish Burger');