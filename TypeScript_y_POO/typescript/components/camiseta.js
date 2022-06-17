"use strict";
// clase (molde del objeto)
var getCarro = document.querySelector('.carro');
function createCar(marca, modelo, precio, kilometraje) {
    let createMarca = document.createElement('p');
    let createModelo = document.createElement('img');
    let createPrecio = document.createElement('p');
    let createKilometraje = document.createElement('span');
    function reuseAppend(element) {
        getCarro.append(element);
    }
    createMarca.textContent = marca;
    reuseAppend(createMarca);
    createModelo.setAttribute('src', modelo);
    reuseAppend(createModelo);
    createPrecio.textContent = precio;
    reuseAppend(createPrecio);
}
class Carro {
    setKilometraje(km) {
        this.kilometraje = km;
    }
    getKilometraje() {
        return this.kilometraje;
    }
}
var newCar = new Carro();
createCar(newCar.marca = "Mercedes", newCar.modelo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg/375px-2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg", newCar.precio = 12000 + "$", newCar.setKilometraje('12 KM'));
var newCarBMW = new Carro();
createCar(newCarBMW.marca = "Mercedes", newCarBMW.modelo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg/375px-2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg", newCarBMW.precio = 12000 + "$", newCarBMW.setKilometraje('12 KM'));
