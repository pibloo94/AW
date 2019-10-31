"use strict";
const fs = require("fs");

//lectura asincrona 1
fs.readFile("FichTexto.txt", { encoding:"utf-8" }, ficheroLeido );

// Función callback
function ficheroLeido (err, contenido) {
    if (err) {
        console.log("Se ha producido un error:");
        console.log(err.message);
    } else {
        console.log("Fichero leído correctamente:");
        console.log(contenido);
    }
}


//lectura asincrona 2
fs.readFile("FichTexto.txt",{ encoding: "utf-8" }, 
function(err, contenido) {
        if (err) {
            console.log("Se ha producido un error:");
            console.log(err.message);
        } else {
            console.log("Fichero leído correctamente:");
            console.log(contenido);
        }
    }
);

//lectura asincrona 3
let contenidoFichero;
fs.readFile("FichTexto.txt", { encoding: "utf-8" }, 
function(err, contenido) {
        if (!err) {
            // Asignamos el contenido a la variable externa
            contenidoFichero = contenido;
        }
    }
);

console.log(contenidoFichero); // ¿Qué se imprime aquí?

//variables predefinidas
console.log(__dirname);
console.log(__filename);

//modulo path
const path = require("path");
path.parse(__filename);

//modulo fs

for (let i=1; i<10; i++) {
    let fichero = "f" + i + ".txt";
    console.log("Solicitada la escritura del fichero " + fichero);
    fs.writeFile(fichero,fichero,function(err) {
        if (!err) {
            console.log("Terminada la escritura del fichero" + fichero);
        }
    });
}
