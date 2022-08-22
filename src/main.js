import { filterByType, sortByAsc, sortByDsc } from './data.js';
import data from './data/pokemon/pokemon.js';

const generadorHTML = (pokemon) => {
    const container = document.createElement("div")
    for (let index = 0; index < pokemon.length; index++) {
        const element = pokemon[index];
        const card =document.createElement("div")
        card.classList.add("card");

        const front = document.createElement("div")
        front.classList.add("pokemonFront")
        front.classList.add("growFront")
        

        const pokeName = document.createElement("h2")
        pokeName.textContent = element.name;
        pokeName.classList.add("namePokemon");

        const img = document.createElement("img")
        img.setAttribute("src", element.img)
        img.classList.add("imagePokemon")

        const pokeType = document.createElement("h4")
        pokeType.textContent = element.type;
        pokeType.classList.add("typePokemon")


        const back = document.createElement("div")
        back.classList.add("pokemonBack")
        
        back.classList.add("growBack")

        const resistant = document.createElement("h2")
        resistant.textContent = element.resistant
        const imgResistant = document.getElementById("imgResistant")
        
        
        resistant.classList.add("resistant");
    
        const weaknesses = document.createElement("h2")
        weaknesses.textContent = element.weaknesses
        weaknesses.classList.add("weaknesses");

        const height = document.createElement("h2")
        let height1 = "HEIGHT: "
        height.textContent = height1 + element.size.height
        height.classList.add("height");

        const weight = document.createElement("h2")
        let weight1 ="WEIGHT: "
        weight.textContent = weight1  +  element.size.weight
        weight.classList.add("weight");


        front.append(img, pokeName, pokeType,)
        back.append(resistant,imgResistant, weaknesses,height,weight)
        card.append(front,back)
        container.append(card)
    
    }
    return container

}
const allpokemons = document.getElementById("allpokemons")
allpokemons.classList = "pokeStyle"
const pokemons = data.pokemon
allpokemons.append(generadorHTML(pokemons));

const selecttype = document.getElementById('pokemon-types');

selecttype.addEventListener('change', () => {
    let results = "";
    if (selecttype.value === '') {
        results = generadorHTML(pokemons);

    } else {
        let c = filterByType(selecttype.value, pokemons);
        results = generadorHTML(c);
    }
    allpokemons.innerHTML = results.innerHTML;


});

const selectSort = document.getElementById("sortby");
selectSort.addEventListener('change', (e) => {

    let results = '';
    if (e.target.value == 0) {
        results = generadorHTML(pokemons.sort(sortByAsc));

    } else {
        results = generadorHTML(pokemons.sort(sortByDsc));

    }
    allpokemons.innerHTML = results.innerHTML;

});

