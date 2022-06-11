"use strict";
//STRING
let nombre = 'jhosua';
//NOMBRE
let edad = 21;
//BOLEANO
let test = true;
//ANY
let cualquierDato = 'cualquier dato';
cualquierDato = 20;
//ARRAY
var datosPersonales = ['Jhosua', 'Penagos', '20 años'];
var años = [2001, 2002, 2003, 2004];
console.log("mi nombre es " + nombre + "," + " tengo " + edad + " años" + test);
console.log(cualquierDato);
console.log(datosPersonales);
datosPersonales.forEach((data, indice) => {
    var _a;
    var createP = document.createElement('p');
    createP.textContent = data;
    if (indice == 1) {
        (_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.append(createP);
    }
});
var iterador = 0;
for (var recorrer in años) {
    if (años[recorrer] == 2001) {
        console.log(años[recorrer]);
    }
}
