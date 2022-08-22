
export const filterByType = (condition, pokemons) => {
  let arrayfiltrado = pokemons.filter(pokemon => pokemon.type[0] == condition.toLowerCase() || pokemon.type[1] == condition.toLowerCase());

  return arrayfiltrado;
};

export const sortByAsc = (a, b) => {
  if(a.name > b.name) {
    return 1;
  }else{
    return -1;
  }

}

export const sortByDsc = (a, b) => {
  if(a.name < b.name) {
    return 1;
  }else{
    return -1;
  }

}

