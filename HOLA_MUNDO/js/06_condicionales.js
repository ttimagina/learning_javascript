'use strict'

//condicional if
//instruciones y esstructura de condiciones
//si A es igual a B entonces haz algo

/*
operadores relaciones 
    mayor >
    menor <
    mayor igual >=
    menor igual <=
    igual ==
    distinto !=
*/


/*
///////////////////Ejercicio 1
var edad1 =30;
var edad2 =12;

if(edad1 > edad2 ){
    console.log("Edad Uno es Mayor que edad 2");
}else{
    console.log("La edad uno es Inferior");
}
*/


var edad = 18;
var nombre ="David Suarez";

if(edad >= 18){
    console.log(nombre+" tiene "+edad+" años, es mayor de edad ");
    if(edad <= 33){
        console.log("Todavia eres Millenian");
    }else if(edad >= 70){
        console.log("Eres Anciano");
    }else{
        console.log("Ya no eres millenian");
    }
}else {
    console.log(nombre+" tiene "+edad+" años, es menor de edad ");
}


/* 
Operadores lógicos
and (Y): &&
or (O): ||
negacion: !
*/


var year = 2019;
//NEGACION
if (year != 2016){
    console.log("No es 2016 es: "+year);
}
//AND
if (year >= 2000 && year <= 2020){
    console.log("estamos en la era actual");
} else {
    console.log("estamos fuera de la era actual");
}
//OR
if(year == 2008 || (year == 2018 && year == 2028)){
    console.log("El años termina en 8");
}else {
    console.log("El año no termina en 8");
}