-- Create Database from scratch
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

-- Create department table
CREATE TABLE department (
id INT NOT NULL AUTO_INCREMENT
, name VARCHAR(30) NOT NULL
, PRIMARY KEY (id)
);

-- Create Role table
CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT
, title VARCHAR(30) NOT NULL
, salary DEC NOT NULL
, department_id INT NOT NULL
, PRIMARY KEY (id)
);

-- Create employee table
CREATE TABLE employee (
id INT NOT NULL AUTO_INCREMENT
, first_name VARCHAR(30) NOT NULL
, last_name VARCHAR(30) NOT NULL
, role_id INT NULL
, manager_id INT NULL
, PRIMARY KEY (id)
);

SELECT * FROM employee;
SELECT * FROM department;
SELECT * FROM role;
