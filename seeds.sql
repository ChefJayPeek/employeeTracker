USE employee_db;

INSERT INTO department (name)
VALUES ("Sales")
,("Engineering")
,("Finance")
,("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 45000, 1)
, ("Salesperson", 35000, 1)
, ("Lead Engineer", 43000, 2)
, ("Software Engineer", 50000, 2)
, ("Account Manager", 55000, 3)
, ("Accountant", 50000, 3)
, ("Legal Team Lead", 165000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Joe", "Smith", 1, null)
, ("Steve", "Jones", 1, 1)
, ("Amy", "Casares", 2, 2)
, ("Max", "Power", 3, null)
, ("Consuela", "Barton", 4, 4)
, ("Bill", "Stone", 5, null);
, ("Jack", "Rustle", 6, 6)
, ("Bill", "Clay", 7, null)
