/* 
b) Utilizando parte del código del apartado a., escribir un módulo ejnode.js que exporte la función 
freplace(fichero, buscar, sustituir, callback) que permite buscar en fichero las cadenas que describe 
la expresión regular buscar y sustituirlas por la cadena sustituir. La función callback recibe un único
parámetro que vale null si no ha ocurrido ningún error y en caso contrario un objeto Error que describe 
el error ocurrido.
El módulo ejnode.js tiene que estar preparado para exportar más elementos además de la función freplace.
Escribir un programa ej1b.js para probar la función freplace.

La llamada freplace(“fichero1.txt”,/[0-9]+/g, ‘{numero}, callback) transformaría el  fichero en:
ej{numero}b.js: Prueba número {numero} de los módulos de node en octubre de {numero}.

Utilizando la expresión regular /\b[0-9]+\b/g , se transformaría en:
ej1b.js: Prueba número {numero} de los módulos de node en octubre de {numero}.
*/
const fs = require("fs");

function freeplace(fichero, buscar, sustituir, callback){
    fs.readFile(fichero, {encoding: "utf-8"}, function(error, texto){
        if(error){
            console.log("Error al leer el fichero.");
        }else{
           let str = texto.replace(buscar, sustituir);
           fs.writeFile(fichero, str, {encoding: "utf-8"}, 
           function(error){
               if(error){
                    callback(error);
               }else{
                    callback(null);
               }
           });
        }
    });
}

module.exports = {
    freeplace: freeplace
}
