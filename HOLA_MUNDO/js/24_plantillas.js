'use strict'

//plantillas de teto

var name = prompt("write your first name: ");
var lastname = prompt("write your last Name");

var texto = "Mi nombres: "+name+"<br/> Mi apellido es: "+lastname;

var plantilla = `
    <h1>Hola como estan me presento:</h1>
    <h3>Mi Nombres es ${name}</h3>
    <h2>Mi Apellido es ${lastname}</h3>
    `; 


document.write(plantilla);