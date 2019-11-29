const cookieParser = require("cookie-parser");
const session = require("express-session");
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

var usuarios = [
    { nombre: "Francisco", apellidos: "Flores Blanco" },
    { nombre: "Elena", apellidos: "Nito del Bosque" },
    { nombre: "Germán", apellidos: "Gómez Gómez" }
]

app.get("/pag3", function (request, response) {
    response.status(200);
    response.render("view3", { usuarios: usuarios });
});

app.locals.nombreApp = "Mi Aplicación";
app.locals.correo = "usuario@ucm.es";

app.get("/pag4", function (request, response) {
    response.status(200);
    response.render("view4");
});

app.listen(3000, function(err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});
