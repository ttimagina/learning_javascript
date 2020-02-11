'use strict'

var categorias = ["accion", "terror", "ciencia ficcion", "drama"];
var peliculas = ["Rambon","It","Star War", "la vida es bella"];
/*
peliculas.sort();
//// SORT ordena el array por orden alfabetico
*/
peliculas.reverse();
//// reverse ordena de forma invertida


console.log(peliculas);



//// busquedas

var precios = [1, 10, 50, 100, 500];

var busqueda = precios.findIndex(precio => precio == 50);
var busqueda2 = precios.some(precio => precio > 100);

console.log(busqueda);
console.log(busqueda2);
