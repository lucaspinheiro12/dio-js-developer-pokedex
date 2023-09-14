const buttonPage = document.getElementById("loadMoreButton");
const pokemonOl = document.getElementById("pokemonList");
const maxRecors = 151;
const limit = 10;
let offSet = 0;


function convertPokemonToLi(pokemon) {
    return `
        <a href = "pokemon.html?id=${pokemon.number}">
            <li class="pokemon ${pokemon.type}" data-id="${pokemon.number}"  >
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type"> ${type}</li>` ).join("")}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        </a>
    `
};

function loadPokemonInten (offSet, limit ) {
    pokeApi.getPokemons(offSet, limit).then((pokeList = []) =>{
       const newHtml = pokeList.map(convertPokemonToLi).join(""); 
        pokemonOl.innerHTML += newHtml;
    })
    .catch((error)=> console.log(error))
}
loadPokemonInten(offSet,limit, convertPokemonToLi)
buttonPage.addEventListener("click", () => {
    offSet += limit;

    const qtdRedordNexPage = offSet + limit;

    if(qtdRedordNexPage >= maxRecors){
        const newLimit = maxRecors - offSet;
        loadPokemonInten(offSet, newLimit );  
        buttonPage.parentElement.removeChild(buttonPage);
    }else{
        loadPokemonInten(offSet, limit ); 
    }
})