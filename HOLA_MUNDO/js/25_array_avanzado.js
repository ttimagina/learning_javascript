'use strict'

// arrays, arreglos, matrices
// una coleccion de datos de tipos de datos de valores

var nombre = "Martin Frette";
var coleccionnombre = ["victor Frette", "soledad Frette", "monica Frette", "javier Frette", 33, true, false];

var lenguaje = new Array("PHP","JS","JAVA", "PHYTON", "MONGO");


document.write("<h2>lenguajes de Programacion</h2>");
document.write("<ul>");

for (var i = 0; i < lenguaje.length; i++) {
    document.write("<li>"+lenguaje[i]+"</li>"); 
}

document.write("</ul>");