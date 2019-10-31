//EJEMPLOS DIAPOSITIVAS

//7.11--------------------------------------------
"use strict";
let s;
let y;
let inc;
s = suma(6,7); // Se ejecuta sin problemas

function suma (a,b) {
    return a+b;
}

/*
y = inc(8); // TypeError: inc is not a function
inc = function (x) {return ++x;};
*/

//7.13--------------------------------------------

function funcion(x) { console.log(`Valor recibido: ${x}`); }

x => { console.log(`Valor recibido: ${x}`); }

funcion(2);

//7.15--------------------------------------------

function imprimirArgumentos(a1,a2,a3) {
    console.log("------")
    console.log(`a1: ${a1}`);
    console.log(`a2: ${a2}`);
    console.log(`a3: ${a3}`);
}

imprimirArgumentos(1, true, "foo");
imprimirArgumentos("uno", "dos", "tres", "cuatro");
imprimirArgumentos("uno", "dos");
console.log("------")

//7.17--------------------------------------------

function multiplicar(a, b = 1) {
    return a*b;
}

multiplicar(5); // 5
multiplicar(5,undefined); // 5


