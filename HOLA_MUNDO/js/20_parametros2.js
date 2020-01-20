'use strict'

/* parametros rest y spread */

//rest//
function listadoFruta(fruta1, fruta2, ...extrasfrutas) {
    console.log("fruta1:", fruta1);
    console.log("fruta2:", fruta2);
    console.log(extrasfrutas)
}

listadoFruta("manzana", "naranja", "kiwi","banana","durazno","pelon");

//spread//
var frutas = ["Naranja", "Manzana"];
listadoFruta(...frutas, "kiwi","banana","durazno","pelon");
