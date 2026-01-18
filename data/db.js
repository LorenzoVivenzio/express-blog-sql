import mysql from "mysql2";

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: 'rootroot',
database: 'blog1_db'
});

// connessione al database
connection.connect((err) => {
if (err){
    console.log(err)
}
console.log("Connesso al mysql")
});

export default connection;