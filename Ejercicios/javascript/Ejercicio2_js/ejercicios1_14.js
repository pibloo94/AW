//EJERCICIO 1

console.log("Hola mundo!");

//EJERCICIO 2

var alumno = {
    nombre : "Juan",
    apellidos : "González",
    notas : (8,8,2,4),
    dni : "4098976",
    edad : '18'
};

//EJERCICIO 3

var x = 1;
var y = 2;
var z = 3;

if(x > y && x > z){ 
    console.log(x);
}
else if(y > x && y > z){
    console.log(y);
}
else{
    console.log(z);
}

//EJERCICIO 4

var x = 4;

if(x%2 == 0){
    console.log("Es divisible por 2");
}
else{
    console.log("No es divisible por 2");
}

//EJERCICIO 5

var str = "Esto es una cadena de texto";

var result = (str.split("a").length - 1);

console.log(result);

//EJERCICIO 6

var str = "hola hola";

str.trim();

console.log(str.length);

//EJERCICIO 7

var x = 8;
var y = 0;
var result;

try{
    result = x/y;
    throw new Error(e);
}catch(e){
    console.log("No se puede dividir por 0");
}

//EJERICIO 8

function undef(x){
    return x == undefined;
}

console.log(undef(true));

//EJERCICIO 9

function tipo(x){
    console.log(typeof(x));
}

tipo(10);

//EJERCICIO 10

function isArray(x){
    return x instanceof Array;
}

var x = [1, 2, 3];

console.log(isArray(x));

//EJERCICIO 11

function primitiveOrObject(x){
    if(x instanceof Object){
        console.log("Object");
    }
    else{
        console.log("primitive - " + typeof(x));
    }
}

objeto = {
    nombre: "Pablo",
}

primitiveOrObject(objeto);
primitiveOrObject(10);

//EJERCICIO 12

o = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: "34"
}
console.log("Propiedades: ");
Object.keys(o).forEach((prop)=> console.log(" -" + prop));

//EJERCICIO 13

function createObject(properties){
    var obj = {};
    var i = 0;

    for(elem of properties){
        obj[elem] = properties[i];
        i++;
    }

    console.log("Propiedades: ");
    Object.keys(obj).forEach((prop)=> console.log(" -" + prop));
}

let properties = ["nombre", "apellido1", "apellido2"];
createObject(properties);


//EJERCICIO 14

function createObjectWithValues(array1, array2){
    var obj = {};
    var i = 0;

    for(elem of array1){
        obj[elem] = array2[i];
        i++;
    }
    
    console.log("Propiedades: ");
    Object.keys(obj).forEach((prop)=> console.log(" -" + prop));
}

var array1 = ["nombre", "apellido"];
var array2 = ["Pablo", "Agudo"];

createObjectWithValues(array1, array2);

