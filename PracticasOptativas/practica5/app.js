// app.js
const config = require("./config");
const DAOUsers = require("./DAOUsers");
const DAOTasks = require("./DAOTasks");
const utils = require("./utils");
const path = require("path");
const mysql = require("mysql");
const express = require("express");

// Crear un servidor Express.js
const app = express();

// Crear un pool de conexiones a la base de datos de MySQL
const pool = mysql.createPool(config.mysqlConfig);

// Crear una instancia de DAOUsers
const daoU = new DAOUsers(pool);

// Crear una instancia de DAOTasks
const daoT = new DAOTasks(pool);

// Middleware express-session y express-mysql-session
const session = require("express-session");
const mysqlSession = require("express-mysql-session");
const MySQLStore = mysqlSession(session);

const sessionStore = new MySQLStore({
	host: "localhost",
	user: "root",
	password: "",
	database: "tareas"
});

const middlewareSession = session({
	saveUninitialized: false, 
	secret: "Xenial Xerus", 
	resave: false,
	store: sessionStore
});

// Configurar ejs como motor de plantillas
app.set("view engine", "ejs");

// Definir el directorio de plantillas
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(middlewareSession);


const redirectLogin = function (req, res, next) {
    if (!req.session.currentUser) {
        res.redirect("login");
    } else {
        res.locals.userEmail = req.session.currentUser;
        next();
    }
}

//-------------------------------------------------------------

app.get("/", function(request, response){
    response.status(200);
    response.redirect("login");
});

app.get("/login", function(request, response) {
    response.status(200);
    response.render("login");
});

app.post("/login", function(request, response) {
    daoU.isUserCorrect(request.body.email, request.body.password, function(err, result){
        if(err){
            console.log("Error al iniciar sesion");
        }else{
            if(result){
                request.session.currentUser = request.body.email;
                response.redirect("tasks");
            }else{
                response.status(401);
                response.render("login", {errorMsg: "Email y/o contraseña no válidos"});
            }
        }
    });
});

app.get("/logout", function(request, response){
    response.status(200);
    request.session.destroy();
    response.redirect("login");
});

app.get("/tasks", redirectLogin, function(request, response){
    daoT.getAllTasks(request.session.currentUser, function (err, result) {
        if (err) {
            console.log("Error en leer tareas");
        } else {
            response.render("tasks", { tasks: result, email: request.session.currentUser});
            console.log("Exito en leer tareas");
        }
    });

});

app.post("/addTask", redirectLogin, function(request, response){
    let task = utils.createTask(request.body.text);
    
    daoT.insertTask(request.session.currentUser, task, function (err) {
        if (err) {
            console.log("Error en insertar tarea");
        } else {
            console.log("Exito en insertar tarea");
            response.redirect("/tasks");
        }
    });
});

app.get("/finish/:id", redirectLogin, function(request, response) {
    daoT.markTaskDone(request.params.id, function(err){
        if(err){
            console.log("Error en finalizar tarea");
        }else{
            response.redirect("/tasks");
            console.log("Exito en finalizar tarea");
        }
    });
});

app.get("/deleteCompleted", redirectLogin, function(request, response){
    daoT.deleteCompleted(request.session.currentUser, function(err){
        if(err){
            console.log("Error al eliminar tareas");
        }else{
            response.redirect("/tasks");
            console.log("Exito al eliminar tareas");
        }
    });
});

app.get("/imagenUsuario", redirectLogin, function(request,response){
    let pathImg;

    daoU.getUserImageName(request.session.currentUser, function(err, result){
        if(err){
            console.log("Error al obtener la imagen de usuario");
        }else if (!result){
            pathImg = path.join(__dirname, "public/img", "Noperfil.png");
            response.sendFile(pathImg);
        }else{
            pathImg = path.join(__dirname, "profile_imgs", result);
            response.sendFile(pathImg);
        }
    });
});

app.listen(config.port, function (err) {
    if (err) {
        console.log("ERROR al iniciar el servidor");
    }
    else {
        console.log(`Servidor arrancado en el puerto ${config.port}`);
    }
});