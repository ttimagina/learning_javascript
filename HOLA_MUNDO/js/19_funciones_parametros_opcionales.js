'use strict'

// funciones
// es un agrupacion reutilizable de un conjunto de instrucciones.

// defino la funcion
function calcuradora(numero1, numero2, mostrar = false) {
    // conjunto de instrucciones a ejecutar
    if (mostrar == false) {
        console.log("suma: "+(numero1+numero2));
        console.log("multiplica: "+(numero1*numero2));
        console.log("division: "+(numero1/numero2));
        console.log("resta: "+(numero1-numero2)); 
    }else{
    document.write("suma: "+(numero1+numero2)+"<br/>");
    document.write("multiplica: "+(numero1*numero2)+"<br/>");
    document.write("division: "+(numero1/numero2)+"<br/>");
    document.write("resta: "+(numero1-numero2)+"<br/>");
    }    
}

calcuradora(1,10);
calcuradora(58,10, true);
calcuradora(10,10, false);
/* calcuradora(10,50); */

/* for(var i=1; i<=10; i++){
    console.log(i);
    calcuradora(i, 8);
} */
    