'use strict'

/*
un programa que 1 pida 6 numeros y lo meta en un array 
mostrar el array todos sus elementos en el cuerpo de la pagina y en la consola.
ordenar el arraya y mostralos.
invertir su orden y mostralo
mostrar cuanto elementos tiene el array
busque da un valor introducido por el usuario. que nos diga si lo encuentra y su indice.
*/

/// var peliculas = new Array(6); // OPCION VALIDA TAMBIEN

var peliculas = [];

for (var i = 0; i <= 5; i++){
    peliculas.push(prompt("instroduce tus 6 mejores peliculas",'none'));
}

document.write("<h2>MIS PELICULAS FAVORITAS</h2>");
document.write("<ul>");

for (var i = 0; i < peliculas.length; i++) {
    document.write("<li>"+peliculas[i]+"</li>"); 
}

document.write("</ul>");

console.log(peliculas);
console.log(peliculas.sort());
console.log(peliculas.reverse());
console.log(peliculas.length);



/*
var elemento = '';
do{
    elemento = prompt('introduce tus 6 peliculas favoritas');
    peliculas.push(elemento);
}while (elemento != "ACABAR");
peliculas.pop();
*/