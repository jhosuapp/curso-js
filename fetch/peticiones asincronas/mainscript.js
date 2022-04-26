// PETICIÓN A API REST

fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then(data =>{
        var getUsers = data.results;
        console.log(getUsers);
        var getContainerForData = document.querySelector('.personajes');
        getUsers.forEach((user)=>{
            var createElementP = document.createElement('p');
            createElementP.textContent = user.name;
            getContainerForData.append(createElementP);

            var createElementImg = document.createElement('img');
            getContainerForData.append(createElementImg);
            createElementImg.src = user.image;
            
            //TRAER EPISODIOS
            var getEpisode = user.episode;
            getEpisode.forEach((episode)=>{
                var createElementForEpisode = document.createElement('p');
                createElementForEpisode.textContent = episode;
                getContainerForData.append(createElementForEpisode);
            });

            document.querySelector('.loader').style.display = "none";
        });

    });
