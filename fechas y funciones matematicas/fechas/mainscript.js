setInterval(()=>{
    var fechaActual = new Date();
    var hora = fechaActual.getHours();
    var minutos = fechaActual.getMinutes();
    var segundos = fechaActual.getSeconds();
    if(minutos < 10){
        console.log(hora + ':' + '0' + minutos + ':' + segundos);
    }else{
        console.log(hora +  ':' + ':' + minutos + ':' + segundos);
    }
   
},1000)



