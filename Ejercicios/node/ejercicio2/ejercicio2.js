const mysql = require("mysql");

//las operaciones de acceso a una base de datos son asincronas a excepcion de la creacion de la conexion

//crear e inizializar un objeto conection
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aw_test1"
});

//Ejemplo de consulta
//realizar la conexion
pool.getConnection(function(err, connection){
    if(err){
        console.log("Error al obtener la conexion");
    }else{
        //hacer la operacion
        connection.query("SELECT Nombre, Apellidos FROM Contactos", 
        function(err, filas){
            //cerrar la conexion (devolver la conexion al pool mediante release)
            connection.release();
            if(err){
                console.log("Error en la consulta a la BBDD");
            }else{
                //--el resultado de una consulta es un array de objetos--
                filas.forEach(function(fila){
                    console.log(`${fila.Nombre} ${fila.Apellidos}`);
                });
            }
        });
    }
});


//Ejemplo de inserccion
/*
pool.getConnection(function(err,connection){
    if(err){
        console.log("Error al obtener la conexion.");
    }else{
        connection.query("INSERT INTO Contactos(Nombre, Apellidos) " + "VALUES ('Diana', 'Díaz')", 
        function(err, result){
            connection.release(); //libero la conexion
            if(err){
                console.log("Error de insercion");
            }else{
                // Imprime el identificador de la nueva fila
                console.log("id: " + result.insertId);
                // Imprime el número de filas insertadas
                console.log("filas afectadas: " + result.affectedRows);
            }
        });
    }
});*/


//Ejercicio 4: hoja de ejercicios

/*
En la figura se muestra el diseño relacional de una base de datos que almacena artículos de revista. 
Cada artículo tiene asociado un identificador numérico, un título, una fecha de publicación y una 
lista de palabras clave, que se encuentran en una tabla separada (palabrasclave).

Se pide implementar una función leerArticulos(callback) que obtenga todos los artículos de la base de 
datos. Esta función debe construir un array de objetos, cada uno de ellos representando la información
de un artículo mediante cuatro atributos: id (númerico), titulo (cadena de texto), fecha (objeto Date) 
y palabrasClave (array de cadenas). Por ejemplo:

    {
        id: 1,
        titulo: "An inference algorithm for guaranteeing Safe destruction",
        fecha: 2008-07-19, //   como objeto de la clase Date
        palabrasClave: [ 'formal', 'inference', 'memory' ]
    }

La función callback pasada como parámetro a leerArticulos funciona de igual modo que las vistas en clase.
Recibe dos parámetros: un objeto con información de error (en caso de producirse), y la lista con los
artículos recuperados de la base de datos.
*/

const pool_ej4 = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "aw_test2"
});

pool_ej4.getConnection(
    function(err, connection){
        if(err){
            console.log("Error al obtener la conexion.");
        }else{
            let sql = "SELECT * FROM articulos JOIN palabrasclave ON (articulos.Id = palabrasclave.IdArticulo)";
            connection.query(sql, function(err, filas){
                connection.release();
                if(err){
                    console.log("Error en la consulta a la BBDD");
                }else{
                    let articles = [];
                    filas.array.forEach(element => {
                        if(articles[element.Id] == undefined){
                            articles[element.Id] = {
                                "id: " : element.Id,
                                "titulo: " : element.Titulo,
                                "fecha: " : element.Fecha,
                                "palabrasClave: " : []
                            }
                            articles[element.Id].palabrasClave.push(element.PalabraClave);  
                        }
                    });
                }
            });
        }
    }
);

function leerArticulos(callback){

}