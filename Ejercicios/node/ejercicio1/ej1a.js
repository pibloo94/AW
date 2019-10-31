/* 
a) Escribir un programa ej1a.js que lea un fichero concreto y sustituya cualquier grupo de uno
o más espacios en blanco por un único blanco. Se deben utilizar las funciones asíncronas readFile 
y writeFile del módulo fs. 
*/

"use strict";
const fs = require("fs");

fs.readFile("fichero.txt", {encoding: "utf-8"}, funcion);

function funcion(error, texto){
    if(error){
        console.log("Error al leer el fichero.");
    }else{
        fs.writeFile("fichero.txt", texto.replace(/\s+/g, " "), {encoding: "utf-8"}, 
        function(error){
            if(error){
                console.log("Error al escribir el fichero.");
            }else{
                console.log("Exito al escribir el fichero.");
            }
        });
    }
}


