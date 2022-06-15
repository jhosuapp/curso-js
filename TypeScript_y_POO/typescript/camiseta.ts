// clase (molde del objeto)

// Propiedades (caracteristicas del objeto)

// Metodos (funciones o acciones del objeto)

type stringAndNumber = string | number;
var getCarro: any = document.querySelector('.carro');


function createCar(marca: string, modelo: any, precio: stringAndNumber, kilometraje: any){
    let createMarca: any = document.createElement('p');
    let createModelo: any = document.createElement('img');
    let createPrecio: any = document.createElement('p');
    let createKilometraje: any = document.createElement('span');

    function reuseAppend(element: any){
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
    public marca: string;
    public modelo: any;
    public precio: stringAndNumber;
    private kilometraje: any;

    public setKilometraje(km: any){
        this.kilometraje = km;
    }

    public getKilometraje(){
        return this.kilometraje;
    }
}

var newCar = new Carro();

createCar(newCar.marca = "Mercedes", 
newCar.modelo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg/375px-2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg",
newCar.precio = 12000 + "$",
newCar.setKilometraje('12 KM'));

var newCarBMW = new Carro();

createCar(newCarBMW .marca = "Mercedes", 
newCarBMW .modelo = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg/375px-2018_Mercedes-Benz_A200_AMG_Line_Premium%2B_1.3_Front.jpg",
newCarBMW .precio = 12000 + "$",
newCarBMW .setKilometraje('12 KM'));





