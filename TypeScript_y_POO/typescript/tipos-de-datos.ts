//STRING
let nombre: string | number = 'jhosua';

//NOMBRE

let edad: number = 21;

//BOLEANO

let test: boolean = true;

//ANY

let cualquierDato: any = 'cualquier dato';
cualquierDato = 20;

//ARRAY

var datosPersonales: Array<string> = ['Jhosua', 'Penagos', '20 años'];

var años: number[] = [2001, 2002, 2003, 2004];

console.log("mi nombre es " + nombre + "," + " tengo " + edad + " años" + test);
console.log(cualquierDato);

console.log(datosPersonales);

datosPersonales.forEach((data, indice)=>{
    var createP: any = document.createElement('p');
    createP.textContent = data;

    if(indice == 1){
        document.querySelector('body')?.append(createP);
    }

});

var iterador: number = 0;

for(var recorrer in años){
    if(años[recorrer] == 2001){
        console.log(años[recorrer]);
    }
}


//TIPOS DE DATOS PERSONALIZADOS

type numerosAndLetras = string | number;

var trabajo: numerosAndLetras = 'programador';

console.log(trabajo);

//LET & VAR

var firtsNumber: number = 12;
var secondNumber: number = 13;

if(firtsNumber > 10){
    var firtsNumber = 99;
    let secondNumber = 102;

    console.log(firtsNumber, secondNumber);
    if(1 < 2){
        console.log(secondNumber);
    }
}

console.log(firtsNumber, secondNumber);