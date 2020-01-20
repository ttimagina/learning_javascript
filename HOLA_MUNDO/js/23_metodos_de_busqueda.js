'use strict'

//transformacion de textos

var numero = 4444;
var texto = "bienvenidos al curso de JavaScript, el mejor de los cursos de dicho lenguaje";
var texto2 = "la idea es aprender JavaScript";

var busqueda = texto.indexOf("curso");
var busqueda2 = texto.lastIndexOf("curso");
var busqueda3 = texto.search("curso");
var busqueda4 = texto.match("curso");
var busqueda5 = texto.substr(15,5);

var busqueda6 = texto2.charAt(15);
var busqueda7 = texto2.startsWith("la");
var busqueda8 = texto2.endsWith("JavaScript");

var busqueda9 = texto2.includes("aprender");

console.log(busqueda);
console.log(busqueda2);
console.log(busqueda3);
console.log(busqueda4);
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
console.log(busqueda9);