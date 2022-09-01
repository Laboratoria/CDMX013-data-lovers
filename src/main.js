import filterAll from './data.js';
import dataPotter from "./data/harrypotter/harry.json" assert { type: "json" };
const filterBySpells = dataPotter.spells;
const main = document.querySelector('main');
 function showCaracters() {
    main.innerHTML = ""
    const characters = dataPotter.characters
    characters.forEach(c => {
     //   console.log(c.name, c.species)
        const card = document.createElement('div');
        card.className = "caracter-card";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const species = document.createElement('h4');
        species.textContent = c.species;
        main.append(card);
        card.append(name, species);
        //console.log(name);
        });
    }
    //crear en el dom el dropdown con las opciones de filtrado
function showSpells() {
    //crear funcion con evento onclick para obtener el valor de filtrado
    //llamamos a la funcion filter de data.js y le enviamos como argumento el valor de las opciones en dopdrown, y la data de la cual se va a filtrar ese valor
    main.innerHTML = ""
    const spells = dataPotter.spells
    spells.forEach(c => {
        //console.log(c.name, c.spell_type, c.pronunciation)
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
        //console.log(c.name, c.description)
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
//funciones sub menu
function showGryffindor(){
    main.innerHTML="";
    const gryffindor = filterAll.houses(dataPotter.characters, "Gryffindor");
    gryffindor.forEach (g => {
        const card = document.createElement('div');
        card.className = "gryffindor-card";
        
        const name = document.createElement('h3');
        name.textContent = g.name;
       
        const house = document.createElement('h4');
        house.textContent = g.house;

        const species = document.createElement('h4');
        species.textContent = g.species;
        
        const gender = document.createElement('h4');
        gender.textContent = g.gender;
        
       card.append(name, house, species, gender);
         main.append(card);
    })
}

function showHufflepuff(){
    main.innerHTML="";
    const hufflepuff = filterAll.houses(dataPotter.characters, "Hufflepuff");
    hufflepuff.forEach (h => {
        const card = document.createElement('div');
        card.className = "hufflepuff-card";
        
        const name = document.createElement('h3');
        name.textContent = h.name;
       
        const house = document.createElement('h4');
        house.textContent = h.house;

        const species = document.createElement('h4');
        species.textContent = h.species;
        
        const gender = document.createElement('h4');
        gender.textContent = h.gender;
        
       card.append(name, house, species, gender);
         main.append(card);
    })
}

function showRavenclaw(){
    main.innerHTML="";
    const ravenclaw = filterAll.houses(dataPotter.characters, "Ravenclaw");
    ravenclaw.forEach (r => {
        const card = document.createElement('div');
        card.className = "ravenclaw-card";
        
        const name = document.createElement('h3');
        name.textContent = r.name;
       
        const house = document.createElement('h4');
        house.textContent = r.house;

        const species = document.createElement('h4');
        species.textContent = r.species;
        
        const gender = document.createElement('h4');
        gender.textContent = r.gender;
        
       card.append(name, house, species, gender);
         main.append(card);
    })
}

function showSlytherin(){
    main.innerHTML="";
    const slytherin = filterAll.houses(dataPotter.characters, "Slytherin");
    slytherin.forEach (s => {
        const card = document.createElement('div');
        card.className = "slytherin-card";
        
        const name = document.createElement('h3');
        name.textContent = s.name;
       
        const house = document.createElement('h4');
        house.textContent = s.house;

        const species = document.createElement('h4');
        species.textContent = s.species;
        
        const gender = document.createElement('h4');
        gender.textContent = s.gender;
        
       card.append(name, house, species, gender);
         main.append(card);
    })
}

//functions Spells filter
function showCharm(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Charm");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name,pronunciation, spells_type);
        main.append(card);
})
}
function showConjuration(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Conjuration");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name,pronunciation,spells_type);
        main.append(card);
})
}
function showHex(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Hex");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name,pronunciation,spells_type );
        main.append(card);
})
}
function showJinx(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Jinx");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name, pronunciation, spells_type);
        main.append(card);
})
}
function showCurse(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Curse");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name, pronunciation, spells_type);
        main.append(card);
})
}
function showTransfiguration(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Transfiguration");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name, pronunciation, spells_type);
        main.append(card);
})
}
function showHealingSpell(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Healing Spell");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name, pronunciation, spells_type);
        main.append(card);
})
}
function showVanishment(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Vanishment");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name, pronunciation, spells_type);
        main.append(card);
})
}
function showTransportation(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Transportation");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name, pronunciation, spells_type);
        main.append(card);
})
}
function showDarkArts(){
    main.innerHTML="";
    const charm = filterAll.spells(filterBySpells, "Dark Arts");
    charm.forEach(c => {
        const card = document.createElement('div');
        card.className = "spellsUno-cards";
        const name = document.createElement('h3');
        name.textContent = c.name;
        const pronunciation = document.createElement('h4');
        pronunciation.textContent = c.pronunciation;
        const spells_type = document.createElement('h4');
        spells_type.textContent = c.spell_type;
        card.append(name, pronunciation, spells_type);
        main.append(card);
})
}
//Principals
document.getElementById("characters").addEventListener("click", showCaracters);
document.getElementById("all").addEventListener("click", showSpells);
document.getElementById("potions").addEventListener("click", showPotions);
document.getElementById("books").addEventListener("click", showBooks);
document.getElementById("funFacts").addEventListener("click", showfunFacts);

//houses
document.getElementById("Gryffindor").addEventListener("click", showGryffindor);
document.getElementById("Hufflepuff").addEventListener("click", showHufflepuff);
document.getElementById("Ravenclaw").addEventListener("click", showRavenclaw);
document.getElementById("Slytherin").addEventListener("click", showSlytherin);

//Spells
document.getElementById("charm").addEventListener("click", showCharm);
document.getElementById("conjuration").addEventListener("click", showConjuration);
document.getElementById("hex").addEventListener("click", showHex);
document.getElementById("jinx").addEventListener("click", showJinx);
document.getElementById("curse").addEventListener("click", showCurse);
document.getElementById("transfiguration").addEventListener("click", showTransfiguration);
document.getElementById("healingSpell").addEventListener("click", showHealingSpell);
document.getElementById("vanishment").addEventListener("click", showVanishment);
document.getElementById("transportation").addEventListener("click", showTransportation);
document.getElementById("darkArts").addEventListener("click", showDarkArts);
//console.log( example, data);

document.getElementById("characters").addEventListener("click", showCaracters);
document.getElementById("spells").addEventListener("click", showSpells);
document.getElementById("potions").addEventListener("click", showPotions);
document.getElementById("books").addEventListener("click", showBooks);
document.getElementById("funFacts").addEventListener("click", showfunFacts);

