import { filterByType, sortByAsc, sortByDsc, calculateEPS} from '../src/data.js';

const firstTestExpect = [{
      "num": "001",
      "name": "bulbasaur",
      "pokemon-rarity": "normal",
    "type": [
      "grass",
      "poison"
    ],
    },
    {
      "num": "005",
      "name": "charmeleon",
      "pokemon-rarity": "normal",
      "type": [
        "fire",
      ]
    },
    {
      "num": "006",
      "name": "charizard",
      "pokemon-rarity": "normal",
      "type": [
        "fire",
        "flying"
      ]
    },
    {
      "num": "006",
      "name": "caterpie",
      "pokemon-rarity": "normal",
      "type": [
        "bug",
      ]
    }
];

const secondTestExpect = [{
  "num": "001",
  "name": "bulbasaur",
  "pokemon-rarity": "normal",
"type": [
  "grass",
  "poison"
],
},
{
  "num": "006",
  "name": "caterpie",
  "pokemon-rarity": "normal",
  "type": [
    "bug",
  ]
},
{
  "num": "006",
  "name": "charizard",
  "pokemon-rarity": "normal",
  "type": [
    "fire",
    "flying"
  ]
},
{
  "num": "005",
  "name": "charmeleon",
  "pokemon-rarity": "normal",
  "type": [
    "fire",
  ]
},

];



describe('sortByAsc', () => {
  it('is a function', () => {
    expect(typeof sortByAsc).toBe('function');
  });
  it('Debe retornar -1 si los pokemones no están ordenados', () => {
    expect(sortByAsc(firstTestExpect, 'name', 'z-a')).toEqual(-1);
  });
  it('Debe retornar 1 si los pokemones están ordenados', () => {
    expect(sortByAsc(secondTestExpect, 'name', 'a-z')).toEqual(1);
  });
});

describe('sortByDsc', () => {
  it('is a function', () => {
    expect(typeof sortByDsc).toBe('function');
  });
  it('Debe retornar los pokemones ordenados de z-a', () => {
    expect(sortByDsc(firstTestExpect, 'name', 'z-a')).toEqual(-1);
  });
});

describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('Debe retornar los tipo de pokemon fire', () => {
    const filterType = filterByType('fire', firstTestExpect)
    expect(filterType.length).toBe(2);
  });
  it('Debe retornar los tipo de pokemon poison', () => {
    const filterType = filterByType('poison', firstTestExpect)
    expect(filterType.length).toBe(1);
  });

});
describe('calculateEPS', () => {
  it('is a function', () => {
    expect(typeof calculateEPS).toBe('function');
  });
});