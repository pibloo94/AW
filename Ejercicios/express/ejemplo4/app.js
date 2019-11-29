const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));

app.post("/procesar_post", function (request, response) {
    let sexoStr = "No especificado";
    switch (request.body.sexo) {
        case "H": sexoStr = "Hombre"; break;
        case "M": sexoStr = "Mujer"; break;
    }
    response.render("infoForm", {
        nombre: request.body.nombre,
        edad: request.body.edad,
        sexo: sexoStr,
        fumador: (request.body.fumador === "ON" ? "Sí" : "No")
    });
});
    

app.listen(3000, function(err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});



