'use strict'

//transformacion de textos

var numero = 4444;
var texto = "bienvenidos al curso de JavaScript, el mejor de los cursos de dicho lenguaje";
var texto2 = "la idea es aprender JavaScript";

var cambiar = texto.replace("cursos","capacitaciones");
var cortar = texto.slice(35,57);
var array = texto.split(" ");
var quitarespacios = texto.trim();

console.log(cambiar);
console.log(cortar);
console.log(array);
console.log(quitarespacios);
