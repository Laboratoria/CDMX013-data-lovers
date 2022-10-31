export const filterByDirector = (nameDirector, allFilms) => {
  if (nameDirector == "allDirector") {
    return allFilms
  } else {
    return allFilms.filter(oneDirector => oneDirector.director === nameDirector)
  }
}
export const filterByDate = (date, allYears) => {
  if (date == "allDate") {
    return allYears
  } else {
    return allYears.filter(oneDecade => oneDecade.release_date <= date && oneDecade.release_date >= (date - 9))
  }
}
export const orderByRanking = (allRanking, allFilms) => {
  if (allRanking == "minor") {
    return allFilms.sort(((a, b) => a.rt_score - b.rt_score))
  }
  if (allRanking == "mayor") {
    return allFilms.sort(((a, b) => b.rt_score - a.rt_score))
  }
}

export const statistics = (allFilms) => {
  let sumAge = 0;
  let characters = 0;
  allFilms.forEach((film) => {
    characters = characters + film.people.length
    film.people.forEach((people) => {
      let ageNumber = parseInt(people.age)
      if (isNaN(ageNumber) == false) {
        sumAge = ageNumber + sumAge
        //console.log(numeroage)
      }
      // personajes = personajes ++
    })
  })
  //console.log("suma", sumage, "numero", personajes);
  const division = sumAge / characters
  let result = Math.round(division); //25
  //console.log(result);
  return result
}





// estadistica de edad promedio de personajes
//acceder al array films>people>age


//entrar a la propiedad del objetoi y sacar el array age
// pasar a numero y despues hacer filtro

/*const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);*/

