"use strict";

const Express = require('express');
const path = require('path');
const morganFreeman = require('morgan');

const app = Express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

app.use(Express.static(path.join(__dirname, "public")));
app.use(morganFreeman('dev'));

const usuarios = [
    {nombre: "Alejandro Cabezas", numero: 123928},
    {nombre: "Manuel Monforte", numero: 134124},
    {nombre: "Iván Fernandez", numero: 867754},
    {nombre: "Gerardo Rose Window", numero: 135234}
]

app.listen(3000, (err) => {
    if(err) console.log(err.message);
    else console.log("Escuchando en el puerto 3000!");
});

app.get("/usuarios", (request, response) => {
    response.redirect("/users");
})

app.get("/users", (request, response) => {
    response.render("usuarios",  {users: usuarios} );
})

app.get("/socios", (request, response) => {
    response.redirect("/users");
})