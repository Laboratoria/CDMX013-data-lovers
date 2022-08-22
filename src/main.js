//import { example } from './data.js';
//import data from './data/harrypotter/data.js';
//import data from './data/pokemon/pokemon.js';
//import dataH from "./data/harrypotter/harry.json" assert { type: "json" };

import dataPotter from "./data/harrypotter/harry.json" assert { type: "json" };
const main = document.querySelector('main');
//console.log(dataPotter)
function showCaracters() {
    main.innerHTML = ""
    const characters = dataPotter.characters
    characters.forEach(c => {
        //console.log(c.name, c.species)

        const card = document.createElement('div');
        card.className = "caracter-card";

        const name = document.createElement('h3');
        name.textContent = c.name;

        const species = document.createElement('h4');
        species.textContent = c.species;

        main.append(card);
        card.append(name, species);

        console.log(name);
    });
}


function showSpells() {
    main.innerHTML = ""
    const spells = dataPotter.spells
    spells.forEach(c => {
        console.log(c.name, c.spell_type, c.pronunciation)

        const card = document.createElement('div');
        card.className = "spell-card";

        const name = document.createElement('h3');
        name.textContent = c.name;

        const spellType = document.createElement('h4');
        spellType.textContent = c.spell_type;

        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;



        main.append(card);
        card.append(name, spellType, pronunciation);


    });
}

function showfunFacts() {
    main.innerHTML = ""
    const funFacts = dataPotter.funFacts
    funFacts.forEach(c => {


        const card = document.createElement('div');
        card.className = "fun-Facts";

        const name = document.createElement('h3');
        name.textContent = c.type;

        const content = document.createElement('h4');
        content.textContent = c.content;




        main.append(card);
        card.append(name, content);


    });
}

function showPotions() {
    main.innerHTML = ""
    const potions = dataPotter.potions
    potions.forEach(c => {
        console.log(c.name, c.description)

        const card = document.createElement('div');
        card.className = "potions-card";

        const name = document.createElement('h3');
        name.textContent = c.name;

        const description = document.createElement('h4');
        description.textContent = c.description;

        



        main.append(card);
        card.append(name, description);


    });
}

function showBooks() {
    main.innerHTML = ""
    const books = dataPotter.books
    books.forEach(c => {
        /*console.log(c.name, c.description)*/

        const card = document.createElement('div');
        card.className = "books-card";

        const title = document.createElement('h3');
        title.textContent = c.title;

        const releaseDay = document.createElement('h4');
        releaseDay.textContent = c.releaseDay;

        const author = document.createElement('h4');
        author.textContent = c.author;

        const description = document.createElement('h4');
        description.textContent = c.description;


        



        main.append(card);
        card.append(title, releaseDay, author, description);


    });
}
/*showCaracters();*/
//console.log( example, data);

document.getElementById("characters").addEventListener("click", showCaracters);
document.getElementById("spells").addEventListener("click", showSpells);
document.getElementById("potions").addEventListener("click", showPotions);
document.getElementById("books").addEventListener("click", showBooks);
document.getElementById("funFacts").addEventListener("click", showfunFacts);

