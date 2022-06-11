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
