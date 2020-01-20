'use strict'

/*
programa que pida dos numero y que nos diga cual es el mayor, el menor y si son iguale
*/

var numero1 = parseInt(prompt('Introduce el Primer Numero',0));
var numero2 = parseInt(prompt('Introduce el segundo numero',0));

while (numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
     numero1 = parseInt(prompt('Introduce el Primer Numero',0));
     numero2 = parseInt(prompt('Introduce el segundo numero',0));
}

console.log(numero1,numero2);

if (numero1 == numero2){
    alert("Los Numero son Iguales");

}else if(numero1 > numero2){
    alert("El Numero mayor es:" + numero1);
    alert("El Numero menor es:" + numero2);
}

else if(numero2 > numero1){
    alert("El Numero mayor es:" + numero2);
    alert("El Numero menor es:" + numero1);
}

else{
    alert("Introduce un Numero Correcto");
}