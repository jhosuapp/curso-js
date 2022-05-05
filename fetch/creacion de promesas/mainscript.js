//CREACION DE PROMESAS


miPromesa()
    .then(data =>{
        var getDataParse = JSON.parse(data);
        console.log(getDataParse.nombre);
        return otraPromesa()
    })  
        .then(dataLenguajes =>{
            console.log(dataLenguajes);
        })


function miPromesa(){
    var infoPersonal = {
        nombre: 'jhosua',
        apellido: 'penagos',
        edad: '20 años'
    }

    return new Promise((resolve, reject) =>{
        var infoPersonalToJson = JSON.stringify(infoPersonal);

        if(typeof infoPersonalToJson != 'string') return reject('error');
        return resolve(infoPersonalToJson);
    });
}


function otraPromesa (){
    var lenguajesProgramacion = {
        front: 'javascript',
        back: 'php'
    }


    return new Promise((resolve, reject) =>{

        setTimeout(()=>{
            var leguajesToString = JSON.stringify(lenguajesProgramacion);

            if(typeof leguajesToString != 'string') return reject('error');
            return resolve(leguajesToString);
        }, 3000)

    });
}


