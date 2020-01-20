'use strict'

//switch
var edad = 18;
var imprime = "";

switch(edad){
    case 18:
        imprime = "acaba de cumplir la mayoria de edad";
    break;
    case 25:
        imprime = "ya eres un adulto";
    break;
    case 40:
            imprime = "Crisis de los 40";
    break;
    case 70:
            imprime = "Eres un anciano";
    break;
    default:
        imprime = "tu edad es neutral";
    break;
}
console.log(imprime);