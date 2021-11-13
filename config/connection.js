require('dotenv').config();

const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTables = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3001,
  user: 'root',
  password: 'Justfuckingwork1!',
  database: 'todos_db'
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Database Connected');
});

module.exports = connection;