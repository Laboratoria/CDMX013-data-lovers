import {} from './data.js';
import data from './data/pokemon/pokemon.js';
//const str = '{ "name", "resistant", "weaknesses"}';

const allPokemons = (data) => {
  let verTodos = '';
  data.pokemon.forEach((obj) => {
    verTodos += `
        <img src="${obj.img}"/>
        <p>${obj.name}</p>`;
  });
  return verTodos;
};
  document.getElementById('allpokemons').innerHTML = allPokemons(data);


