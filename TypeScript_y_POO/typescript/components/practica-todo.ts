type StringAndNumber = string | number;

class jugadores{
    private posicion: string;
    private edad: number;
    private nombre: string;
    public goles: number;


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


class jugadoresExtendidos extends jugadores{
    private balonesDeOro: StringAndNumber;

    public setBalonesDeOro(balonesDeOro: stringAndNumber){
        this.balonesDeOro = balonesDeOro;
    }

}

var cristianoRonaldo = new jugadores('DE', 36, 'Cristiano Ronaldo', 899);


var cristianoRonaldoBalones = new jugadoresExtendidos('DE', 36, 'Cristiano Ronaldo', 990);
cristianoRonaldoBalones.setBalonesDeOro(14 + ' balones de oro');



var goToJsonString: any = JSON.stringify(cristianoRonaldo);
var goToJsonParse: any = JSON.parse(goToJsonString);


console.log(goToJsonParse);

goToJsonParse.forEach((data: any)=>{
    console.log(data);
});









