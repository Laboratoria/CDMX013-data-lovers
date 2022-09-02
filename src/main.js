import { filterByType, sortByAsc, sortByDsc, calculateSTAB, calculateDPS, calculateEPS, } from './data.js';
import data from './data/pokemon/pokemon.js';
const buttonUp = document.querySelector('.buttonUp');

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonUp.classList.add('showScrollUp');
    } else {
        buttonUp.classList.remove('showScrollUp');
    }
};

window.addEventListener('scroll', scrollFunction);

const backTotop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};
buttonUp.addEventListener('click', backTotop);

const pokemons = data.pokemon

const generadorHTML = (pokemon) => {
    const container = document.createElement("div")
    container.classList.add("allcards")
    for (let index = 0; index < pokemon.length; index++) {
        const element = pokemon[index];
        const card = document.createElement("div")
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
        resistant.classList.add("resistant");

        const weaknesses = document.createElement("h2")
        weaknesses.textContent = element.weaknesses
        weaknesses.classList.add("weaknesses");

        const height = document.createElement("h2")
        height.textContent = element.size.height
        height.classList.add("height");

        const weight = document.createElement("h2")
        weight.textContent = element.size.weight
        weight.classList.add("weight");
        const about = document.createElement("h2")
        about.textContent = element.about
        about.classList.add("about");

        const pokemonStats = document.createElement('div');
        pokemonStats.classList.add('stats');
        pokemonStats.innerHTML = "<span class=attacksTitle>Special Attacks</span>";

        const pokemonAttackName = document.createElement('table');
        pokemonAttackName.classList.add('pokemonAttack');
        pokemonAttackName.innerHTML = "<tr>" + "<th class=headerTable>Name</th>" + "<th class=headerTable>STAB</th>" + "<th class=headerTable>DPS</th>" + "<th class=headerTable>EPS</th>" + "</tr>";
        let specialattack = "";
        let specialAttacks = element["special-attack"];

        for (let attack of specialAttacks) {
            specialattack =

                "<tr>" + "<th><span class=attackNameTable>" + attack.name + "</span></th>" +
                "<th><span class=attackStats>" + calculateSTAB(attack["base-damage"], attack["type"], element["type"]) + "</span></th>" +
                "<th><span class=attackStats>" + calculateDPS(attack["base-damage"], attack["type"], element["type"], attack["move-duration-seg"]) + "</span></th>" +
                "<th><span class=attackStats>" + calculateEPS(attack["energy"], attack["move-duration-seg"]) + "</span></th>" +
                "</tr>";

            pokemonAttackName.innerHTML = pokemonAttackName.innerHTML + specialattack;
        }

        front.append(img, pokeName, pokeType,)
        back.append(resistant, weaknesses, height, weight, about, pokemonStats, pokemonAttackName)
        card.append(front, back)
        container.append(card)

    }
    return container

}

const allpokemons = document.getElementById("allpokemons")
allpokemons.classList = "pokeStyle"

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
