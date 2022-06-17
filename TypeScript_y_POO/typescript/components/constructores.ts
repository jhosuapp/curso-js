//INTERFACE

interface CamisetaBase{
    // setColor(color: string);
}

class Camiseta implements CamisetaBase {
    private color: string;
    private talla: string;
    private cuello: string;
    public marca: string;

    constructor(color: string, talla: string, cuello: string, marca: string){
        this.color = color;
        this.talla = talla;
        this.cuello = cuello;
        this.marca = marca;

    }
    
    public setColor(color: string){
        this.color = color;
    }

    public getColor(){
        this.color;
    }

}



//CLASE HIJA

// class sudadera extends Camiseta{
//     public capucha: boolean;

//     set
// }

var CamisetaNike = new Camiseta('NEGRO', 'L', 'REDONDO', 'NIKE');
