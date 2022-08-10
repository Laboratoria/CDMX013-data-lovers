//import {} from './data.js';
import data from './data/pokemon/pokemon.js';
//const str = '{ "name", "resistant", "weaknesses"}';
const allpokemons = document.getElementById("allpokemons")
allpokemons.classList="pokeStyle"
const pokemons= data.pokemon
for (let i=0; i<pokemons.length;i++) {
    const x = pokemons[i]
    
    const type = x.type
    console.log(type)
    }
const generadorHTML=(pokemon)=>{
 
const div = document.createElement("div")
div.classList.add("pokemon")
div.classList.add("grow")

const pokeName = document.createElement("h2")
pokeName.textContent=pokemon.name

const img = document.createElement("img")
img.setAttribute("src",pokemon.img)

const pokeType = document.createElement("h4")
pokeType.textContent=pokemon.type


div.append(img, pokeName, pokeType)
return div
}
pokemons.forEach(onePokemon=>allpokemons.appendChild(generadorHTML(onePokemon)))

