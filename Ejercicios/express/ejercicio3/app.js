const cookieParser = require("cookie-parser");
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));


app.post("/primer", function(request, response){
    response.status(200);
    response.cookie("primer_sumando", request.body.primer_sumando);
    response.redirect("segundo.html");
});

app.post("/segundo", function(request, response){
    response.status(200);
    response.cookie("segundo_sumando", request.body.segundo_sumando);
    response.redirect("resultado");
});

app.get("/resultado", function (request, response) {
    response.status(200);
    let primer = Number(request.cookies.primer_sumando);
    let segundo = Number(request.cookies.segundo_sumando);
    let resultado = primer + segundo;
    response.clearCookie("primer_sumando");
    response.clearCookie("segundo_sumando");
    response.render("resultado", {primer, segundo, resultado});
});


app.listen(3000, function(err) {
    if (err) {
        console.error("No se pudo inicializar el servidor: " + err.message);
    } else {
        console.log("Servidor arrancado en el puerto 3000");
    }
});
