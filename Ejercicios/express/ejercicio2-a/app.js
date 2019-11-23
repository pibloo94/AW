const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

let usuarios = ["Javier Montoro", "Dolores Vega", "Beatriz Nito"];


app.get("/users.html", function(request, response) {
    response.status(200);
    response.render("users", { users: usuarios });
});

app.get("/eliminar/:id", function(request, response) {
    usuarios.splice(request.params.id, 1);
    response.redirect("/users.html");
});


app.listen(3000, function(err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});