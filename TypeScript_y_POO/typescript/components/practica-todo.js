"use strict";
class jugadores {
    constructor(posicion, edad, nombre, goles) {
        this.posicion = posicion;
        this.edad = edad;
        this.nombre = nombre;
        this.goles = goles;
    }
    setGoles(goles) {
        this.goles = goles;
    }
    getGoles() {
        return this.goles;
    }
}
class jugadoresExtendidos extends jugadores {
    setBalonesDeOro(balonesDeOro) {
        this.balonesDeOro = balonesDeOro;
    }
}
var cristianoRonaldo = new jugadores('DE', 36, 'Cristiano Ronaldo', 899);
var cristianoRonaldoBalones = new jugadoresExtendidos('DE', 36, 'Cristiano Ronaldo', 990);
cristianoRonaldoBalones.setBalonesDeOro(14 + ' balones de oro');
var goToJsonString = JSON.stringify(cristianoRonaldo);
var goToJsonParse = JSON.parse(goToJsonString);
console.log(goToJsonParse);
goToJsonParse.forEach((data) => {
    console.log(data);
});
