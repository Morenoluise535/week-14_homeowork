DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;

use burgers_db;

CREATE TABLE burgers (
	id INT (10) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR (50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

