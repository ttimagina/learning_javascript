'use strict'

/*
tabla de multiplicar de un numero introducido por  pantalla
*/

var number = parseInt(prompt("Introducir un Numero para tu tabla",1));

for (var i = 1; i <= 10; i++){
    document.write(i+" x "+number+" = "+(i*number)+"<br/>");
}
    
