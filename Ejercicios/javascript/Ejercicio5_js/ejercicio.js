//Ej1: recibe un array de strings y devuelve la longitud total
function maplengths1(array){
        let newArray = [];

        for(let i = 0; i < array.length; i++){
                newArray[i] = array[i].length;
                console.log(newArray[i]);
        }

        return newArray;
}

let array1 = ["primera posicion", "segunda posicion", "tercera posicion"];
maplengths1(array1);

function maplengths2(array){
        return array.map(n => n.length);
}

console.log(maplengths2(array1));

//Ej2: hacia algo pero ni idea
function filterInf2(array){
        return array.filter(function(v, i, a){ return (i < a.length/2) });
}


//Ej2.1: devolver true si todas las funciones que aplicas son true
function everyFunction1(array){
        return array.every(elemen => typeof(elemen) == "function");
}

//Ej2.2: devolver true si todas las funciones que aplicas son true
function everyFunction2(array){
        return array.some(elemen => typeof(elemen) == "function");
}

function f1(){
        return true;
}

function f2(){
        return true;
}

function f3(){
        return false;
}

let array2 = [f1, f2];
let array3 = [f1, f2, 2];

console.log(everyFunction1(array2));
console.log(everyFunction1(array3));
console.log(everyFunction2(array3));

//Ej3: suma de los cuadrados
function reduceSquare(array){
        return array.reduce((ac, n) => ac + n * 2);
}

let array4 = [1, 2, 3, 4];
console.log(reduceSquare(array4));

//Ejemplo diapositiva 8.12

let personas = [ { nombre: "Ricardo", edad: 45},
                 { nombre: "Julia", edad: 24 },
                 { nombre: "Ashley", edad: 28 } ];

personas.forEach(p => {console.log("Hola, me llamo " + p.nombre + " y tengo " + p.edad + " años");})

                        