const cookieParser = require("cookie-parser");
const session = require("express-session");
const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
const multerFactory = multer();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const middlewareSession = session({
    saveUninitialized: false,
    secret: "foobar34",
    resave: false
});

app.use(middlewareSession);

app.get("/reset.html", function(request, response) {
    response.status(200);
    request.session.contador = 0;
    response.type("text/plain");
    response.end("Has reiniciado el contador");
});

app.get("/increment.html", function (request, response) {
    if (request.session.contador === undefined) {
        response.redirect("/reset.html");
    } else {
        let contador = Number(request.session.contador) + 1;
        request.session.contador++;
        response.status(200);
        response.type("text/plain");
        response.end(`El valor actual del contador es ${contador}`);
    }
});

app.listen(3000, function(err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});
