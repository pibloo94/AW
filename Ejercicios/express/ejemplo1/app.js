"use strict";

const express = require("express");
const path = require("path");
const app = express();

app.get("/", function(request, response){
    //EJEMPLO 1
    /*
    response.status(200);
    // tipo MIME, sirve para que el navegador que hacer con el fichero
    response.type("text/plain; chatset=utf-8"); 
    response.end("Esta es la pagina raiz");
    */

    //EJEMPLO 2
    /*
    response.status(200);
    response.type("text/html");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Lista de usuarios</title>");
    response.write('<meta charset="utf-8">');
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>¡Bienvenido!</h1>");
    response.write("</body>");
    response.end("</html>");
    */

    //EJEMPLO 3
    response.sendFile(path.join(__dirname, "public", "bienvenido.html"));
    
});

app.get("/users.html", function(request, response){
    let usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];

    //EJEMPLO 1
    /*
    response.status(200);
    response.type("text/plain; charset=utf-8");
    response.end("Aqui se mostrara la pagina de usuarios");
    */

    //EJEMPLO 2
    //se genera una pagina HTML de una manera tediosa, hay otras maneras
    /*
    response.status(200);
    response.type("text/html");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Lista de usuarios</title>");
    response.write('<meta charset="utf-8">')
    response.write("</head>");
    response.write("<body><ul>");
    usuarios.forEach((usuario) => {
        response.write(`<li>${usuario}</li>`);
    });
    response.write("</ul></body>");
    response.end("</html>");
    */

    //EJEMPLO 3
    //las paginas dinamicas dependen de la peticion realizada, por  ello
    //han de ser generadas total o parcialmente por codigo javascript

    response.status(200);
    response.type("text/html");
    
    usuarios.forEach(function(usuario) {
        response.write(`<li>${usuario}</li>`);
    });
});

app.get("/usuarios.html", function(request, response){
    response.redirect("/users.html");
});

app.listen(3000, function(err){
    if(err){
        console.error("No se pudo iniciar el serviodr: " + err.message);
    }else{
        console.log("Servidor arrancado en el puerto 3000");
    }
});