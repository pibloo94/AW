// app.js
const config = require("./config");
const DAOTasks = require("./DAOTasks");
const utils = require("./utils");
const path = require("path");
const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

// Crear un servidor Express.js
const app = express();

// Crear un pool de conexiones a la base de datos de MySQL
const pool = mysql.createPool(config.mysqlConfig);

// Crear una instancia de DAOTasks
const daoT = new DAOTasks(pool);

// Configurar ejs como motor de plantillas
app.set("view engine", "ejs");

// Definir el directorio de plantillas
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, 'public')));


app.get("/", function(request, response){
    response.status(200);
    //response.sendFile(path.join(__dirname, "public", "tasks.html"));
});

app.get("/tasks.html", function(request, response){
    var listaTareas = [
        { text: "Preparar práctica AW", tags: ["AW", "practica"] },
        { text: "Mirar fechas congreso", done: true, tags: [] },
        { text: "Ir al supermercado", tags: ["personal"] },
        { text: "Mudanza", done: false, tags: ["personal"] },
    ];
    
    response.status(200);
    // Busca la plantilla "views/tasks.ejs"
    // La variable 'tasks' que hay dentro de esta plantilla tomará
    // el valor del array 'tasks'.
    response.render("tasks", {tasks: listaTareas});
});

app.listen(config.port, function (err) {
    if (err) {
        console.log("ERROR al iniciar el servidor");
    }
    else {
        console.log(`Servidor arrancado en el puerto ${config.port}`);
    }
});