"use strict";
const fs = require("fs");

//lectura sincrona
try {
    const contenido = fs.readFileSync("FichTexto.txt",{ encoding: "utf-8" });
    console.log("Fichero leído correctamente:");
    console.log(contenido);
} catch (err) {
    console.log("Se ha producido un error:");
    console.log(err.message);
}