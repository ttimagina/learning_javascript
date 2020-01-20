'use strict'

// arrays, arreglos, matrices
// una coleccion de datos de tipos de datos de valores

var nombre = "Martin Frette";
var coleccionnombre = ["victor Frette", "soledad Frette", "monica Frette", "javier Frette", 33, true, false];

var lenguaje = new Array("PHP","JS","JAVA");


console.log(coleccionnombre);
console.log(coleccionnombre[6]);
console.log(coleccionnombre.length);
console.log(lenguaje);


////////////////////

var eleccionindice = parseInt(prompt("Elige un elemento de 0 a 6",0));
if (eleccionindice >= coleccionnombre.length) {
    alert("introduce un valor correcto entre 0 y "+ coleccionnombre.length);
}else{
    alert(coleccionnombre[eleccionindice]);
}

///////////////////