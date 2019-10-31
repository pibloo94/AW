const freeplace = require("freeplace");

freeplace.freeplace("fichero1.txt", /[0-9]+/g, {numero}, function(error){
    if(error){
        console.log("Error");
    }else{
        console.log("Exito");
    }
});