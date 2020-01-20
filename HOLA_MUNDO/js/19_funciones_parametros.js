'use strict'

// funciones
// es un agrupacion reutilizable de un conjunto de instrucciones.

// defino la funcion
function calcuradora(numero1, numero2) {
    // conjunto de instrucciones a ejecutar
    console.log("suma: "+(numero1+numero2));
    console.log("multiplica: "+(numero1*numero2));
    console.log("division: "+(numero1/numero2));
    console.log("resta: "+(numero1-numero2));

}

/* calcuradora(10,50); */

for(var i=1; i<=10; i++){
    console.log(i);
    calcuradora(i, 8);
}
    