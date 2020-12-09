// EmployeeTracker server 
// Add dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
// const { inherits } = require("util");
const cTable = require("console.table");


// Setup database access
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "mysql1234",
    database: "employee_db"

});

connection.connect((err) => {
    if (err) throw err;
    console.log("connected as ID :" + connection.threadId + "\n");
    init();
});

function init() {
    connection.query('SELECT first_name, last_name FROM employee', function(err, res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    });
}