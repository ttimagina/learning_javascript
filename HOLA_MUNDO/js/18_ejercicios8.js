'use strict'

/*
calculadora
que pida 2 numero por pantalla 
si ponemos mal que vuelva a pedir
por alerta y consola el resultado de la operacion
*/

var number1 = parseInt(prompt('Insertar el primer numero'));
var number2 = parseInt(prompt('Insertar el segundo numero'));

while(number1 < 0 ||number2 < 0 || isNaN(number1) || isNaN(number2)){
    number1 = parseInt(prompt('Insertar el primer numero'));
    number2 = parseInt(prompt('Insertar el segundo numero'));

}

var resultado = "la suma es: "+(number1+number2)+ "<br/>"+
                "la resta es: "+(number1-number2)+ "<br/>"+
                "la multiplicacion es: "+(number1*number2)+ "<br/>"+
                "la division es: "+(number1/number2)+ "<br/>";

var resultadoconsola = "la suma es: "+(number1+number2)+ "\n"+
                "la resta es: "+(number1-number2)+ "\n"+
                "la multiplicacion es: "+(number1*number2)+ "\n"+
                "la division es: "+(number1/number2)+ "\n";

document.write(resultado);
alert(resultadoconsola);
console.log(resultadoconsola);