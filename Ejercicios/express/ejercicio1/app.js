const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let rojo = 0, azul = 0, verde = 0, ninguno = 0;

app.get("/procesar_get", function (request, response) {
    switch (request.query.color) {
        case "rojo": rojo++; break;
        case "azul": azul++; break;
        case "verde": verde++; break;
        case "ninguno": ninguno++; break;
    }
    response.render("tabla", {
        "rojo": rojo,
        "azul": azul,
        "verde": verde,
        "ninguno": ninguno
    });
});

app.listen(3000, function(err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});



