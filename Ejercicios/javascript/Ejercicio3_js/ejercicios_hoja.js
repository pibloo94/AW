//EJERCICIO 1 - HOJA DE EJERCICIOS

function producto(x, y){
    let result = 0;
    
    try{
        //Si x e y son números, se calculará su producto.
        if(typeof(x) == 'number' && typeof(y) == 'number'){
            result = x*y;
        }
        //Si x es un número e y es un vector (o viceversa), se calculará
        //el vector que resulta de multiplicar todas los componentes 
        //de y por x.
        else if(typeof(x) == 'number' && y instanceof Array){
            for(let i = 0; i < y.length; i++){
                result += x * y[i];
            }
        }
        else if(typeof(y) == 'number' && x instanceof Array){
            for(let i = 0; i < x.length; i++){
                result += y * x[i];
            }
        }
        else if(x instanceof Array && y instanceof Array){
            if(x.length == y.length){
                for(let i = 0; i < x.length; i++){
                    result += x[i] * y[i];
                }
            }
            else{
                throw new Error(e);
            }
        }

        console.log(result);

    }catch(e){
        console.log("NO TE PASES");
    }
}

producto(10, 10);
producto(10, [1, 2, 3]);
producto([1, 2, 3], 2);
producto([1, 2], [1, 2]);
producto([1, 2], [1, 2, 3]);

