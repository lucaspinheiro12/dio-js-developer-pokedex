
 const pokeApi = {}

    function convertPokemonApiDetailToPokemon(pokeDetail) {
        const pokemon = new Pokemon();
        pokemon.name = pokeDetail.name;
        pokemon.number = pokeDetail.id;

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);

        pokemon.type = pokeDetail.types[0].type.name;
        pokemon.types = types;
        pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;
        
        return pokemon;

    }

    pokeApi.getPokemonDetail = (pokemon) => {
        return fetch(pokemon.url).then((response) => response.json() )
        .then(convertPokemonApiDetailToPokemon)
    }
    
    pokeApi.getPokemons = (offSet = 0, limit = 5) => { 
       
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`;

   return fetch(url)
    .then( (response)=> response.json())
    .then((jsonBody)=> jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) => pokemonsDetails)
    }   

   pokeApi.getPokemonId = (id) =>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
    .then(response => response.json())
    }


    pokeApi.getSpecies = (id)=> {
        const url = `https://pokeapi.co/api/v2/pokemon-species/${id}`;
        return fetch(url)
            .then((result) => result.json())
    }

   /* pokeApi.getEvolution =(urlRecebida) =>{
        const url = `${urlRecebida}`
       return  fetch (url)
        .then((result) => result.json())
    }*/

       

   
   
   
    
