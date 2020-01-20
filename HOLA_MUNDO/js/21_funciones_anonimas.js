'use strict'

// funciones anonimas
// es una fucion que no tiene nombres

var pelicula = function (nombre) {
    return "la peliculas es :"+nombre;
}

//CALLBACK
/*function operacionsuma(numero1, numero2) {
    var sumar = numero1 + numero2;

    return sumar;
}

console.log(operacionsuma(10,7));
document.write(operacionsuma(10,7));
*/
//funcione anonimas (callback)

function operacionsuma(numero1, numero2, lasumaes, lasumax2) {
    var sumar = numero1 + numero2;

    lasumaes(sumar);
    lasumax2(sumar);

    return sumar;
}

operacionsuma(34,14,
    function (dato) {
        console.log("El resultado de la suma es: ", dato);
    },
    function (dato) {
        console.log("El resultado x 2 es: ", (dato*2));
    });


//funcione anonimas ---- flechas ----


operacionsuma(33,55,
    dato => {
        console.log("El resultado de la suma es: ", dato);
    },
    dato => {
        console.log("El resultado x 2 es: ", (dato*2));
    });