// Dependencies
const mysql = require("mysql");

// Define connection
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "mysql1234",
    database: "employee_db"

});
// Connect to msql server
connection.connect((err) => {
    if (err) throw err;
    console.log("connected as ID :" + connection.threadId + "\n");
    init();
});

// Export connection for use in server.js
module.exports = connection;
