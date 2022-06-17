"use strict";
//INTERFACE
class Camiseta {
    constructor(color, talla, cuello, marca) {
        this.color = color;
        this.talla = talla;
        this.cuello = cuello;
        this.marca = marca;
    }
    setColor(color) {
        this.color = color;
    }
    getColor() {
        this.color;
    }
}
//CLASE HIJA
// class sudadera extends Camiseta{
//     public capucha: boolean;
//     set
// }
var CamisetaNike = new Camiseta('NEGRO', 'L', 'REDONDO', 'NIKE');
