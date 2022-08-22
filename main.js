//import { example } from './data.js';
//import data from './data/harrypotter/data.js';
//import data from './data/pokemon/pokemon.js';
import dataH from "./data/harrypotter/harry.json" assert { type: "json" };
const main = document.querySelector('main');
function dataAccess (){
const dataHarry= fetch("data/harrypotter/harry.json").then(res => {
    res.json().then(dataH =>{
        const characters = dataH.characters
        characters.forEach(c => {
            console.log(c.name, c.species)
            const card = document.createElement('div');
            card.className = "caracter-card";
            const name = document.createElement('h3');
            name.textContent=c.name;
            const species = document.createElement('h4');
            species.textContent=c.species;
            main.append(card);
            card.append(name, species);
            console.log(name);
        });
    })
}) ;
return(dataHarry);
}
dataAccess();
//console.log( example, data);
























