'use strict'

//documento object mode

function cambiarcolor(color) {
    caja.style.background = color;
}

var caja = document.getElementById("micaja");

var caja2 = document.querySelector("#micaja");

caja.innerHTML = "¡Texto desde Js!";
caja.style.background = "yellow";
caja.style.padding = "10px"; 
caja.className = "hola"

console.log(caja);