'use strict'

//bucle while (mientras)
// es una estructura de control que se repite 


var year = 2019;

while(year <= 2050){

    console.log("Estamos en el año"+year);
   
    if(year == 2030){
        break;
    }
    year++;

}

/*
while(year != 1999){

    console.log("Estamos en el año"+year);

    year--;

}
*/

//Do While---------------------
/*
var year = 30;
do {
    alert ("Solo Cuando sea diferente a 20");
    year--;
}while(year > 25)
*/