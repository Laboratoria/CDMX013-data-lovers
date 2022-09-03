import filterAll from '../src/data.js';




describe('filterAll.houses', () => {
  it('Should be a function', () => {
    expect(typeof filterAll.houses).toBe('function');
  })
  it('Should be return FilterChacarcters"', () => {
    expect(filterAll.houses()).toBe('object');
  });
});

  


//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
