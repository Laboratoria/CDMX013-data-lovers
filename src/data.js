// estas funciones son de ejemplo
//import harryPotter from "./data/harrypotter/data.js"

const filterAll = {
houses : function (characters, house ) {
  const filterCharacters = characters.filter((character)=>{
    return character.house === house
  });
   return filterCharacters;
},
spells: function (spells, spellType ){
  const filterSpells= spells.filter((spells)=>{
      return spells.spell_type===spellType
  })
  return filterSpells;
}
};
console.log(filterAll);
export default filterAll;
