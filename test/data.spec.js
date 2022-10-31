import { filterByDirector, filterByDate, orderByRanking, statistics } from '../src/data.js';

describe('filterByDirector', () => {
  const data= [
    {director:"Hayao Miyazaki"}, {director:"Hiromasa Yonebayashi"} ]
  it('is a function', () => {
    expect(typeof filterByDirector).toBe('function');
  });

  it('returns `peliculas por director seleccionado`', () => {
      expect(filterByDirector ("Hayao Miyazaki", data)).toEqual([{director:"Hayao Miyazaki"}]); 
      expect (filterByDirector("Hiromasa Yonebayashi", data)).toEqual([{director:"Hiromasa Yonebayashi"}]);
  });
  it ("return allData", () => {
    expect (filterByDirector ("allDirector", data)).toHaveLength(2); // esperamos un 2  // revisar este test
    // no esperamos un 3

  })});
  
  describe ('filterByDate', () => {
    const decade = [ {release_date: "1989"}]
    it ('is a function', () =>{
      expect (typeof filterByDate).toBe("function");
  });

    it ("return peliculas dentro decada de los 80s", () => {
    expect (filterByDate("1989", decade)).not.toEqual(["2010"]);
      })
  });


describe ("orderByRanking", () =>{
  it ("ordena peliculas por ranking", () =>{

    let data = [ {rt_score: 90}, {rt_score: 85}, {rt_score: 50} ] //preparar ambiente
    let films = orderByRanking ("menor", data) //ejecutar acción // 5
    expect (films).toEqual([ {rt_score: 50}, {rt_score: 85}, {rt_score: 90} ]) //expectativa de que sucedio

  })

})


describe ("orderByRanking", () =>{
  it ("ordena peliculas por ranking", () =>{

    let data = [ {rt_score: 90}, {rt_score: 85}, {rt_score: 35} ] //preparar ambiente
    let films = orderByRanking ("mayor", data) //ejecutar acción // 5
    expect (films).toEqual([ {rt_score: 90}, {rt_score: 85}, {rt_score: 35} ]) //expectativa de que sucedio

  })

})


describe ("statistics", () => {
  it ("promedia edades de todos los personajes", () =>{

    

let data = [{people:[{age:13}]},{people:[{age:25}]},{people:[{age:40}]}]
let promedio = 26
expect (statistics(data)).toEqual (promedio)

  })

}
)
//hacer un test 


    //esperamos que filterByDate devuelva 1 decada 
   
  // como configurar eslint para formatear en visual studio code
  
  



    //film.release_date >= (date - 9)


