const mysql = require("mysql2");
require('dotenv').config();
console.log(process.env);

const mysqlConnection = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    database: process.env.DB_NAME, 
    password: process.env.DB_PASSWORD 
  },
  console.log(`Connected to the company databse!`)
);

module.exports = mysqlConnection;