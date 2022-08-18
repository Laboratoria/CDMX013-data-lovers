import { filterByType, sortByAsc, sortByDsc } from './data.js';
import data from './data/pokemon/pokemon.js';
const generadorHTML = (pokemon) => {
    const div = document.createElement("div")
    for (let index = 0; index < pokemon.length; index++) {
        const element = pokemon[index];
        div.classList.add("pokemon")
        div.classList.add("grow")

        const pokeName = document.createElement("h2")
        pokeName.textContent = element.name

        const img = document.createElement("img")
        img.setAttribute("src", element.img)

        const pokeType = document.createElement("h4")
        pokeType.textContent = element.type
        div.append(img, pokeName, pokeType)
    }
    return div
}
const allpokemons = document.getElementById("allpokemons")
allpokemons.classList = "pokeStyle"
const pokemons = data.pokemon
allpokemons.append(generadorHTML(pokemons));

const selecttype = document.getElementById('pokemon-types');
selecttype.addEventListener('change', (e) => {
    let results = "";
    if (e.target.value === '') {
        results = generadorHTML(pokemons);

    } else {
        let c = filterByType(e.target.value, pokemons);
        results = generadorHTML(c);
    }
    allpokemons.innerHTML=results.innerHTML;
});

const selectSort = document.getElementById("sortby");
selectSort.addEventListener('change', (e) => {
    
    let results = '';
    if(e.target.value == 0) {
        results = generadorHTML(pokemons.sort(sortByAsc));
      
    }else {
        results = generadorHTML(pokemons.sort(sortByDsc));

    }
    allpokemons.innerHTML=results.innerHTML;

});