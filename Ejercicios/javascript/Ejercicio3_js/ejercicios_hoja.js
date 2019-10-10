//---------------------------------------- HOJA DE EJERCICIOS ----------------------------------------

//--------EJERCICIO 1--------

/*Escribir una función producto que reciba dos parámetros (llamados x e y) y devuelva su producto, teniendo
 en cuenta que tanto la x como la y pueden ser números o vectores (representados como arrays). La función 
 se comportará del siguiente modo:*/

function producto(x, y){
    let result = 0;
    
    try{
        //Si x e y son números, se calculará su producto.
        if(typeof(x) == 'number' && typeof(y) == 'number'){
            let result = x*y;
        }
        //Si x es un número e y es un vector (o viceversa), se calculará
        //el vector que resulta de multiplicar todas los componentes 
        //de y por x.
        else if(typeof(x) == 'number' && y instanceof Array){
            let result = [];

            for(let i = 0; i < y.length; i++){
                result[i] = x * y[i];
            }
        }
        else if(typeof(y) == 'number' && x instanceof Array){
            let result = [];

            for(let i = 0; i < x.length; i++){
                result[i] = y * x[i];
            }
        }
        //Si x e y son vectores de la misma longitud, se calculará el producto 
        //escalar de ambos
        else if(x instanceof Array && y instanceof Array){
            let result = [];

            if(x.length == y.length){
                for(let i = 0; i < x.length; i++){
                    result[i] = x[i] * y[i];
                }
            }
            //En cualquier otro caso, se lanzará una excepción
            else{
                throw new Error(e);
            }
        }
    }catch(e){
        console.log("NO TE PASES");
    }
}

producto(10, 10);
producto(10, [1, 2, 3]);
producto([1, 2, 3], 2);
producto([1, 2], [1, 2]);
producto([1, 2], [1, 2, 3]);

//--------EJERCICIO 2--------

/*Escribir una función sequence que reciba un array de funciones [f_1, ..., f_n] y un
 elemento inicial x. La función debe aplicar f_1 a x, y pasar el resultado a f_2 que a 
 su vez le pasará el resultado a f_3 y así sucesivamente. Se piden tres versiones 
 diferentes de la función sequence:*/
function isFuntionsArray(funciones){
    if(!(funciones instanceof Array)){
        return false;
    }

    let i = 0;
    let esFuncion = true; 
    
    while(i < funciones.length && esFuncion){
        if(funciones[i] instanceof Function){
            esFuncion = false;
        }

        i++;
    }

    return esFuncion;
}

/*Implementar la función sequence1 suponiendo que ninguna de las funciones del array 
recibido devuelve el valor undefined.*/
function sequence1(funciones, x){
    try{
        if(funciones instanceof Array && funciones.length > 0){
            for(let i = 0; i < funciones.length; i++){
               x = funciones[i](x);
            }
        }else{
            throw new Error(e);
        }

        return x;
    }catch(e){
        console.log("ERROR: sequence1");
    }
}

/*Implementar la función sequence2 para que, en el caso en que una función del array
 devolviera el valor undefined, la función sequence2 devuelva directamente undefined 
 sin seguir ejecutando las funciones restantes.*/
function sequence2(funciones, x){
    let esUndefined = false;

    try{
        for(let i = 0; i < funciones.length && !esUndefined; i++){
            if(funciones[i]() == undefined){
                esUndefined = true;
            }else{
                x = funciones[i](x);
            }
        }
        return x;

    }catch(e){
        console.log("ERROR: sequence2");
    }
}

/*Implementar la función sequence3 para que reciba un tercer parámetro opcional (right), 
cuyo valor por defecto será false. Si el parámetro right tiene el valor true, el recorrido 
del elemento por las funciones será en orden inverso: desde la última función del array 
hasta la primera. Independientemente del recorrido, la función sequence3 se comportará 
como la función sequence2.*/
function sequence3(funciones, x, inverseOrder){
    try{
        if(inverseOrder == undefined || !inverseOrder){
            return sequence2(funciones, x);
        }
        else{
            return sequence2(funciones.reverse(), x);
        }
    }catch(e){
        console.log("ERROR: sequence3");
    }
}

//fuciones de prueba

let funcion1 = function sumar(x){
    return x + x;
}

let funcion2 = function multiplicar(x){
    return x * x;
}

let funcion3 = function cuadrado(x){
    return x * 2;
}

let funcion4 = function indefinida(){
    return undefined;
}

var funciones1 = [funcion1, funcion2, funcion3];
var funciones2 = [funcion1, funcion4, 23];

console.log(isFuntionsArray(funciones1));

sequence1(funciones1, 1);
sequence2(funciones2, 2);
sequence3(funciones2, 3, true);


//--------EJERCICIO 3--------

/*Escribir una función sequence que reciba un array de funciones [f_1, ..., f_n] y un elemento
 inicial x. La función debe aplicar f_1 a x, y pasar el resultado a f_2 que a su vez le pasará
 el resultado a f_3 y así sucesivamente. Se piden tres versiones diferentes de la función 
sequence:*/

/*Implementar la función sequence1 suponiendo que ninguna de las funciones del array recibido
 devuelve el valor undefined.*/

/*Implementar la función sequence2 para que, en el caso en que una función del array devolviera 
el valor undefined, la función sequence2 devuelva directamente undefined sin seguir ejecutando 
las funciones restantes.*/

/*Implementar la función sequence3 para que reciba un tercer parámetro opcional (right), cuyo 
valor por defecto será false. Si el parámetro right tiene el valor true, el recorrido del elemento 
por las funciones será en orden inverso: desde la última función del array hasta la primera. 
Independientemente del recorrido, la función sequence3 se comportará como la función sequence2.
(NOTA: dentro de una función se puede comprobar que el último parámetro no está presente comparándolo 
con undefined).*/

