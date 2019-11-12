const mysql = require("mysql");

const DAOUser = require("./DAOUser");

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "bd_ej3"
});

let dao = new DAOUser(pool);

dao.isUserCorrect("yo@email.com", 1234, function(err, existe) {
    if (err) {
        console.log("Error al comprobar existencia usuario.");
    } else {
        if (existe) {
            console.log("El usuario existe.");
        } else {
            console.log("El usuario no existe.");
        }
    }
});

dao.getUserImageName("yo@email.com", function(err, str) {
    if (err) {
        console.log("Error al obtener la imagen.");
    } else {
        console.log(str);
    }
});

dao.geta