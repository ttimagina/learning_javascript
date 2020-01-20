'use strict'

/*
hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario
*/

var numero1 = parseInt(prompt('Introduce el Primer Numero',0));
var numero2 = parseInt(prompt('Introduce el segundo numero',0)); 

document.write("<h1>De "+numero1+" al "+numero2+" estan los siguientes valores:</h1>")
for(var i = numero1; i<= numero2; i++){
    document.write(i+"</br>");
}