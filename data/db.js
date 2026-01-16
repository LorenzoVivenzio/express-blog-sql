import mysql from "mysql2"

const mysql = require('mysql2');

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'rootroot',
database: 'blog1_db'
});

connection.connect((err) => {
if (err) throw err;
console.log('Connected to MySQL!');
});