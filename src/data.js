export const filterByType = (condition, pokemons) => {
  let arrayfiltrado = pokemons.filter(pokemon => pokemon.type[0] == condition.toLowerCase() || pokemon.type[1] == condition.toLowerCase());
  return arrayfiltrado;
};

export const sortByAsc = (a, b) => {
  if (a.name > b.name) {
    return 1;
  } else {
    return -1;
  }

};
export const sortByDsc = (a, b) => {
  if (a.name < b.name) {
    return 1;
  } else {
    return -1;
  }
};

export const calculateSTAB = (attack, typeattack, type) => {
  const damage = Number(attack);
  if (type.includes(typeattack)) {
    const stab = ((damage * 1.20));
    return stab;
  }
  return damage;
}

export const calculateDPS = (attack, typeattack, type, time) => {
  const damage = Number(attack);
  const moveTime = Number(time);
  let dps = Math.round(damage / moveTime);
  if (type === (typeattack)) {
    const stab = ((damage * 1.20));
    dps = Math.round(stab / moveTime);
  }
  return dps;
}
export const calculateEPS = (energy, time) => {
  const energyExpend = Number(energy);
  const moveTime = Number(time);
  const eps = Math.round(energyExpend / moveTime);
  return eps;
}
