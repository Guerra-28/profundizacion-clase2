import mysql from "mysql2";
const conexion = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "mydb",
});

conexion.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err.stack);
    return;
  }
  console.log("Conectado a la base de datos");
});

const nombre = "Juanpis";
const email = "otacon124@gmail.com";

const sql = `INSERT INTO usuarios (nombre, email) VALUES ('${nombre}', '${email}')`;

conexion.query(sql, (error, results) => {
  if (error) {
    console.error("Error insertando en la base de datos:", error.stack);
    return;
  }
  console.log("Usuario insertado con ID:", results.insertId);
});

conexion.end();
