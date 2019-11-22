"use strict";

const express = require("express");
const path = require("path");
const app = express();

//configurar ejs como motor de plantillas
app.set("view engine", "ejs");

//definir el directorio de plantillas
app.set("views", path.join(__dirname, "views"));

//--------------------------------------middleware--------------------------------------

function mi_middleware(request, response, next){
    // ...
    // Manipular los objetos request y/o response.
    // ...
    next(); // Saltar al siguiente middleware
}

app.use(mi_middleware);

app.use(function(request, response, next){
    console.log(`Recibida petición ${request.method} ` + `en ${request.url} de ${request.ip}`);
    // Saltar al siguiente middleware
    next();
});

//el siguiente middleware deniega todas las peticiones que provengan
//de una IP censurada
app.use(function (request, response, next) {
    let ipsCensuradas = ["147.96.81.244", "145.2.34.23"];

    // Comprobar si la IP de la petición está dentro de la
    // lista de IPs censuradas.
    if (ipsCensuradas.indexOf(request.ip) >= 0) {
        // Si está censurada, se devuelve el código 401 (Unauthorized
        response.status(401);
        response.end("No autorizado"); // TERMINA LA RESPUESTA
    } else {
        // En caso contrario, se pasa el control al siguiente middlew
        console.log("IP autorizada");
        next();
    }
});

app.use(function(request, response, next) {
    request.esUCM = request.ip.startsWith("147.96.");
    next();
});

app.use(function(request, response, next) {
    response.status(404);
    response.render("error404", { url: request.url });
});

//--------------------------------------get--------------------------------------

app.get("/", function(request, response){
    response.status(200);
    response.sendFile(path.join(__dirname, "public", "bienvenido.html"));
});

app.get("/users.html", function(request, response){
    var usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito", "Paco Paquito"];

    response.status(200);
    // Busca la plantilla "views/users.ejs"
    // La variable 'users' que hay dentro de esta plantilla tomará
    // el valor del array 'usuarios'.
    response.render("users", {users: usuarios});
});

app.get("/usuarios.html", function(request, response){
    response.redirect("/users.html");
});

app.get("/index.html", function (request, response) {
    response.status(200);
    response.type("text/plain; encoding=utf-8");
    response.write("¡Hola! ");
    if (request.esUCM) {
        response.write("Estás conectado desde la UCM");
    }else{
        response.write("No estás conectado desde la UCM");
    }
    response.end();
});

//--------------------------------------listen--------------------------------------

app.listen(3000, function(err){
    if(err){
        console.error("No se pudo iniciar el serviodr: " + err.message);
    }else{
        console.log("Servidor arrancado en el puerto 3000");
    }
});

/*
Marcadores de programa, delimitados por <% y %>
Marcadores de expresión, delimitados por <%= y %>

Para utilizar EJS con Exress.js, opciones a configurar:
- view engine: motor de plantillas a utilizar.
- views: directorio que almacena las plantillas.
*/