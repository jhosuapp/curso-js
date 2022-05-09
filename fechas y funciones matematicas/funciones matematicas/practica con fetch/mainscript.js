fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then(dataTwo =>{
        var getData = dataTwo.results;
        var math = Math.floor(Math.random() * getData.length)
        
        console.log(getData[math].name);
    })
