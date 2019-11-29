const cookieParser = require("cookie-parser");
const session = require("express-session");
const express = require("express");
const path = require("path");
const multer = require("multer");

const app = express();
//const multerFactory = multer();
const multerFactory = multer({ dest: path.join(__dirname, "uploads")});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


/*
app.post("/procesar_formulario", function (request, response) {
    response.render("datosFormulario", {
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        fumador: request.body.fumador === "si" ? "Sí" : "No"
    });
});
*/

/*
app.post("/procesar_formulario", multerFactory.none(), function (request, response) {
    response.render("datosFormulario", {
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        fumador: request.body.fumador === "si"
    });
});
*/
app.post("/procesar_formulario", multerFactory.single("foto"), function (request, response){
    let nombreFichero = null;

    if (request.file) { // Si se ha subido un fichero
        console.log(`Fichero guardado en: ${request.file.path}`);
        console.log(`Tamaño: ${request.file.size}`);
        console.log(`Tipo de fichero: ${request.file.mimetype}`);
        nombreFichero = request.file.filename;
    }

    response.render("datosFormulario", {
        nombre: request.body.nombre,
        apellidos: request.body.apellidos,
        fumador: request.body.fumador === "si" ? "Sí" : "No",
        imagen: nombreFichero
    });
});

app.get("/imagen/:id", function (request, response) {
    let pathImg = path.join(__dirname, "uploads", request.params.id);
    response.sendFile(pathImg);
});

app.listen(3000, function (err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});
