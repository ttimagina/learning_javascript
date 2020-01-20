'use strict'

/*
que nos diga si un numero es par o inpar
1. ventana prompt
2. Sino es valido que nos pida de nuevo un numero
*/

var number = parseInt(prompt("introduce un numero",0));

while(isNaN(number)){
    number = parseInt(prompt("introduce un numero, 0"));
}
if (number%2 == 0) {
    alert("Es un numero Par");
}else{
    alert("es un numero Impar");
}
