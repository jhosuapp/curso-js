type StringAndNumber = string | number;

//DECORADOR

function numeroCamiseta(numero: number){
    return function(target: Function){
        target.prototype.numeroCamiseta = function():void{
            console.log('el numero del jugador es ' + numero);
        }
    }
}


@numeroCamiseta(12)
class jugadores{
    private posicion: string;
    private edad: number;
    private nombre: string;
    public goles: number;
    public numeroCamiseta: number;


    public setGoles(goles: number){
        this.goles = goles;
    }

    public getGoles(){
        return this.goles;
    }

    constructor(posicion: string, edad: number, nombre: string, goles: number){
        this.posicion = posicion;
        this.edad = edad;
        this.nombre = nombre;
        this.goles = goles;
    }
}
var cristianoRonaldo = new jugadores('DE', 36, 'Cristiano Ronaldo', 899);
cristianoRonaldo.numeroCamiseta = 12;
console.log(cristianoRonaldo);


class jugadoresExtendidos extends jugadores{
    private balonesDeOro: StringAndNumber;

    public setBalonesDeOro(balonesDeOro: stringAndNumber){
        this.balonesDeOro = balonesDeOro;
    }

}




var cristianoRonaldoBalones = new jugadoresExtendidos('DE', 36, 'Cristiano Ronaldo', 990);
cristianoRonaldoBalones.setBalonesDeOro(14 + ' balones de oro');











