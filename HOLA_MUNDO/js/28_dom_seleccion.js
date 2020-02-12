'use strict'

//documento object mode

//selecionar elementos por etiquetas

var seealldiv = document.getElementsByTagName('div');

var editartag = seealldiv[2]
editartag.innerHTML ="modifique contenido";
editartag.style.background = "gray";
editartag.style.fontFamily = "arial";
var vercontenido = seealldiv[2].textContent;

console.log(vercontenido);



//seleccionar elementos por su clase