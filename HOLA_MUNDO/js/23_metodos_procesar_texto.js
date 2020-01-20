'use strict'

//transformacion de textos

var numero = 4444;
var texto = "bienvenidos al curso de JavaScript";
var texto2 = "la idea es aprender JavaScript";

var dato = numero.toString();
    dato = texto.toUpperCase();
    dato = texto2.toLowerCase();

console.log(dato);

//calcular longitud

var nombres = "martinfacundofrette";
var numeracion = "1928372347"
var array = ["nerd","developers", "javascript"]

console.log(nombres.length);
console.log(numeracion.length);
console.log(array.length);

//concatenar + unir texto
var textototal = texto+" "+texto2+" "+nombres;
var textototal2 = texto.concat(array);
console.log(textototal);
console.log(textototal2);