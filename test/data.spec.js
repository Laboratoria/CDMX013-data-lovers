import { filterByType, sortByAsc, sortByDsc,  calculateDPS, calculateEPS, calculateSTAB } from '../src/data.js';

const firstTestExpect = [{
      "name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ],
    },
    {
      "name": "charmeleon",
      "type": [
        "fire",
      ]
    },
    {
      "name": "charizard",
      "type": [
        "fire",
        "flying"
      ]
    },
    {
      "name": "caterpie",
      "type": [
        "bug",
      ]
    }
];


const secondTestExpect = [{
  "name": "bulbasaur",
"type": [
  "grass",
  "poison"
],
},
{
  "name": "caterpie",
  "type": [
    "bug",
  ]
},
{
  "name": "charizard",
  "type": [
    "fire",
    "flying"
  ],
 
},
{
  "name": "charmeleon",
  "type": [
    "fire",
  ]
},
];

const thirdTestExpect =[
  {
    "name": "charmeleon",
    "type": [
      "fire",
    ]
  },
  {
    "name": "charizard",
    "type": [
      "fire",
      "flying"
    ],
  },
  {
    "name": "caterpie",
    "type": [
      "bug",
    ]
  },
  {
  "name": "bulbasaur",
"type": [
  "grass",
  "poison"
  ],
},
];

 

describe('sortByAsc', () => {
  it('is a function', () => {
    expect(typeof sortByAsc).toBe('function');
  });
  it('Debe retornar los pokemones no ordenados', () => {
    expect (firstTestExpect.sort(sortByAsc)).toEqual(firstTestExpect);
  });
  it('Debe retornar los pokemones ordenados de la A a la Z', () => {
    expect (firstTestExpect.sort(sortByAsc)).toEqual(secondTestExpect);
  });
});

describe('sortByDsc', () => {
  it('is a function', () => {
    expect(typeof sortByDsc).toBe('function');
  });
  it('Debe retornar los pokemones no ordenados', () => {
    expect (firstTestExpect.sort(sortByDsc)).toEqual(firstTestExpect);
  });
  it('Debe retornar los pokemones ordenados de z-a', () => {
    expect (firstTestExpect.sort(sortByDsc)).toEqual(thirdTestExpect);
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

const attack= 80;
const typeattack= "poison";
const type= "poison";
const time= 2.3;
const energy=-50;
const type2="grass"


describe('calculateDPS', () => {
  it('is a function', () => {
    expect(typeof calculateDPS).toBe('function');
  });
  it('debe retornar un DPS de 42', () => {
    expect(calculateDPS(attack, typeattack, type, time)).toEqual(42);
  })
  it('attack debe ser igual a typeattack ', () => {
    expect(calculateDPS(attack, typeattack, type2, time)).toEqual(35);
  });
});

describe('calculateEPS', () => {
  it('is a function', () => {
    expect(typeof calculateEPS).toBe('function');
  });
  it('debe retornar un EPS de -22', () => {
    expect(calculateEPS(energy, time)).toEqual(-22);
  })
});
describe('calculateSTAB', () => {
  it('is a function', () => {
    expect(typeof calculateSTAB).toBe('function');
  });
  it('debe retornar un STAB de 80', () => {
    expect(calculateSTAB(attack, typeattack, type)).toEqual(96);
  })
  it('debe retornar un STAB de 80', () => {
    expect(calculateSTAB(attack, typeattack, type2)).toEqual(80);
});
});