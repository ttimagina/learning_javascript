'use strict'

var categorias = ["accion", "terror", "ciencia ficcion", "drama"];
var peliculas = ["Rambon","It","Star War", "la vida es bella"];

var cine = [categorias, peliculas];

document.write("mejor pelicula de "+cine[0][2]+" es "+cine[1][2]);

/*
console.log(cine[1][2]);
console.log(cine[0][2]);
*/

// operaciones con arrays

var elemento = '';

do{
    elemento = prompt('introducir tus peliculas favoritas');
    peliculas.push(elemento);
}while (elemento != "ACABAR");

peliculas.pop();
///// .pop es la funcion para sacar el ultimo elemento introducido


var indice = peliculas.indexOf("la vida es bella");
    if(indice > -1){
        peliculas.splice(indice, 1);
///// .splice es la funcion para sacar un elemento especifico del array        
    }

console.log(peliculas);



var peliculas_string = peliculas.join();
//////////////// Join es la funcion de transformar un array en un string separados en coma
console.log(peliculas_string);


var cadena = "texto1, texto2, texto,";
var cadena_array = cadena.split(", ");
////////////// split es la funcion de transformar a string en array especificando la opcion de , y espacio
console.log(cadena_array);


