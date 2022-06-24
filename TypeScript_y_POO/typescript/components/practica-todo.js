"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//DECORADOR
function numeroCamiseta(numero) {
    return function (target) {
        target.prototype.numeroCamiseta = function () {
            console.log('el numero del jugador es ' + numero);
        };
    };
}
let jugadores = class jugadores {
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
};
jugadores = __decorate([
    numeroCamiseta(12)
], jugadores);
var cristianoRonaldo = new jugadores('DE', 36, 'Cristiano Ronaldo', 899);
cristianoRonaldo.numeroCamiseta = 12;
console.log(cristianoRonaldo);
class jugadoresExtendidos extends jugadores {
    setBalonesDeOro(balonesDeOro) {
        this.balonesDeOro = balonesDeOro;
    }
}
var cristianoRonaldoBalones = new jugadoresExtendidos('DE', 36, 'Cristiano Ronaldo', 990);
cristianoRonaldoBalones.setBalonesDeOro(14 + ' balones de oro');
