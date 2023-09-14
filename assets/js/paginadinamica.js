
function newHeader(type, number,name,photo, types = []){ 
    return `
    <div class = "pokemon-div  ${type}" >
        <span class="name">${name}</span>
        <span class="number">#${number}</span>
    
        <div class="detail">
            <ol class="types  ">
                ${types.map((type) => `<li class="type ${type}"> ${type}</li>` ).join("")}
            </ol>
    
            <img class="imagem"  src="${photo}"
                alt="${name}">
        </div>
    </div>    
        `;  

}

function newAtributosSobre(pokemon = JSON , pokemonSpecies = JSON){
    eggsGroups = "";
    eggsCycle = "";
    valorPokemon = "";
    switch(pokemonSpecies.gender_rate){
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
            valorPokemon = "Female";
            break;
        case 0:
        case 1:
        case 2:
        case 3:
            valorPokemon = "Male";
            break;
        case -1:
            valorPokemon = "Genderless";
            break;
    };
    
    if(pokemonSpecies.egg_groups.length > 1){
        eggsGroups = pokemonSpecies.egg_groups[0].name
        eggsCycle = pokemonSpecies.egg_groups[1].name
    }else{
        eggsGroups = pokemonSpecies.egg_groups[0].name;
        eggsCycle = pokemonSpecies.egg_groups[0].name;
    }

    return `
        <div class = "especie">
            <ul class = "caracteristicas">
            <li class = "especie-caracteristicas"> Species</li>
            <li class = "especie-caracteristicas">Height</li>
            <li class = "especie-caracteristicas">weight</li>
            <li class = "especie-caracteristicas">Abilities</li>
            </ul>
            <ul class = "valor">
            <li class = "especie-valor">${pokemon.species.name}</li>
            <li class = "especie-valor">${pokemon.height}</li>
            <li class = "especie-valor">${pokemon.weight}</li>
            <li class = "especie-valor">${pokemonSpecies.habitat.name}</li>
            </ul>
        </div>
        <h2 class = "criacao">Breeding</h2>
        <div class = "especie">
            <ul class = "caracteristicas">
            <li class = "especie-caracteristicas">Gender</li>
            <li class = "especie-caracteristicas">Egg Groups</li>
            <li class = "especie-caracteristicas">Egg Cycle</li>
            </ul>
            <ul class = "valor">
                <li class = "especie-valor">${valorPokemon}</li>
                <li class = "especie-valor">${eggsGroups}</li>
                <li class = "especie-valor">${eggsCycle}</li>
            </ul>
        </div>

    `

}
function newAtributosEstrutura(stats = JSON){
    let hp = 0;
    let attack = 0;
    let defense = 0;
    let speAtack = 0;
    let speDefense = 0;
    let speed = 0;
    let total = 0;

    let ate50 = "ate50";
    let ate75 = "ate75";
    let apartir76 = "apartir76";
    let apartir85 = "apartir85"

    stats.forEach(valor => {
        total =  total + valor.base_stat;
        if(valor.stat.name === "hp"){
            hp = valor.base_stat;
            if(hp <= 50){
                hp = ate50;
            }
            else if(hp<=75){
                hp = ate75;
            }else if(hp <= 84){
                hp = apartir76
            }
            else{
               hp = apartir85
            }

        }else if(valor.stat.name === "attack"){
            attack = valor.base_stat;
            if(attack <= 50){
                attack = ate50;
            }
            else if(attack<=75){
                attack = ate75;
            }
            else if(attack<=84){
                attack = apartir76
            }
            else{
                attack = apartir85
            }

        }else if(valor.stat.name === "defense"){
            defense = valor.base_stat;
            if(defense <= 50){
                defense = ate50;
            }
            else if(defense<=75){
                defense = ate75;
            } 
            else if(defense<=84){
                defense = apartir76
            }
            else{
                defense = apartir85
            }

        }else if(valor.stat.name === "special-attack"){
            speAtack = valor.base_stat;
            if(speAtack <= 50){
                speAtack = ate50;
            }
            else if(speAtack<=75){
                speAtack = ate75;
            } else if(speAtack<=84){
                speAtack = apartir76
            }
            else{
                speAtack = apartir85
            }

        }else if(valor.stat.name === "special-defense"){
            speDefense = valor.base_stat ;
            if(speDefense <= 50){
                speDefense = ate50;
            }
            else if(speDefense<=75){
                speDefense = ate75;
            }
             else if(speDefense<=84){
                speDefense = apartir76
            }
            else{
                speDefense = apartir85
            }

        } else{
            speed = valor.base_stat;
            if(speed <= 50){
                speed = ate50;
            }
            else if(speed<=75){
                speed = ate75;
            } 
            else if(speed<=84){
                speed = apartir76
            }
            else{
                speed = apartir85
            }

        }
    });

    return `
    <div class = "stats">
    <ul class = "caracteristicas-stats">
        <li class = "especie-caracteristicas"> HP</li>
        <li class = "especie-caracteristicas">Attack</li>
        <li class = "especie-caracteristicas">Defense</li>
        <li class = "especie-caracteristicas">SP. Atk</li>
        <li class = "especie-caracteristicas">SP. Def</li>
        <li class = "especie-caracteristicas">Speed</li>
        <li class = "especie-caracteristicas">Total</li>
    </ul>
    <ul class = "valor-stats">
        ${stats.map((stat) => `<li class="especie-valor" > ${stat.base_stat}   </li> `  ).join("")}
        <li class="especie-valor"> ${total}</li>
    </ul>
    <ul class = "linha">
        <li class="linha-valor ${hp}"> </li>
        <li class="linha-valor ${attack}"> </li>
        <li class="linha-valor ${defense}"> </li>
        <li class="linha-valor ${speAtack}"> </li>
        <li class="linha-valor ${speDefense}"> </li>
        <li class="linha-valor ${speed}"> </li>
        <li class="linha-valor apartir100 "> </li>
    </ul>
    
</div>

    `
}

function newAtributosEvolucao(){

}

function newAtributosMovimentos(){

}
function clickMenuHorizontal(dados = JSON, dadosSpecies = JSON){
    const ulLista = document.getElementById("lista");
    const liLinhas = document.querySelectorAll(".atributos-lista-linha")
    const sectionBody = document.querySelector('[data-tipo-atributos]')

    const liSobre= document.getElementById("linha-sobre");
    const liEstrutura=document.getElementById("linha-estrutura");
    const liEvolucao=document.getElementById("linha-evolução");
    const liMovimentos =document.getElementById("linha-movimentos");
    ulLista.addEventListener('click', (e)=> {
        if (e.target.tagName  === "LI") {
            liLinhas.forEach(x => x.classList.remove("linha-clicada"))
            sectionBody.innerHTML = "";
            switch(e.target.textContent){
                case "About":
                    sectionBody.innerHTML = newAtributosSobre(dados, dadosSpecies)
                liSobre.classList.add("linha-clicada");
                    break;
                case "Base Stats":
                    liEstrutura.classList.add("linha-clicada");
                    sectionBody.innerHTML= newAtributosEstrutura(dados.stats);
                    break;
                case "Evolution":
                    liEvolucao.classList.add("linha-clicada");
                    break;
                case "Moves":
                    liMovimentos.classList.add("linha-clicada");
                    break;        
            }
        }
      });
}
(async ()=> {
    const catchUrl = new URL(window.location);
    const id = catchUrl.searchParams.get("id");
    const dados = await pokeApi.getPokemonId(id);
    const dadosSpecies= await pokeApi.getSpecies(id);
    const sectionheader = document.querySelector('[data-tipo-pokemon]');
    const sectionBody = document.querySelector('[data-tipo-atributos]')

    const type = dados.types[0].type.name
    const number = dados.id
    const name = dados.name
    const photo =  dados.sprites.other.dream_world.front_default;
    const types = dados.types.map((typeSlot) => typeSlot.type.name)
    try{
        sectionheader.innerHTML += newHeader(type, number,name,photo, types);    
        clickMenuHorizontal(dados,dadosSpecies );   
    }catch(error){
        console.log(error)
    }
})
();
    
