var carro = {
    color: 'rojo',
    modelo: '2007',
    marca: 'renault',
    velocidad: '200km',
    cambiaColor: function(nuevoColor){
        this.color = nuevoColor;
    }
}


carro.cambiaColor('red');

console.log(carro);