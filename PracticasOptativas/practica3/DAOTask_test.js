const mysql = require("mysql");

const DAOTask = require("./DAOTask");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_ej3"
});

let dao = new DAOTask(pool);

dao.