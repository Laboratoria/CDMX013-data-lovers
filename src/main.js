import { filterByDirector, filterByDate, orderByRanking, statistics } from './data.js';
import allData from './data/ghibli/ghibli.js';
const container = document.getElementById("container")
container.classList = "filmStyle"
const allFilms = allData.films



const generateHTML = (allFilms) => {     //arrow function
    const div = document.createElement("div")
    div.classList.add('poster'); //contenedor padre
    const titleFilm = document.createElement("h2") // nombre pelicula
    titleFilm.textContent = allFilms.title
    const poster = document.createElement("img") // imagen pelicula
    poster.setAttribute("src", allFilms.poster)
    poster.classList.add('imagen');
    const release_date = document.createElement("h4") //año pelicula
    release_date.textContent = allFilms.release_date

    const rt_score = document.createElement("h5") //año pelicula
    rt_score.textContent = allFilms.rt_score
    div.append(poster, titleFilm, release_date, rt_score)
    return div
}

// nodos javascript // pantalla html


allFilms.forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))

const filterDirector = document.getElementById("filterDirector")
filterDirector.addEventListener("change", function (director) {
    container.innerHTML = ""
    filterByDirector(director.target.value, allFilms).forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))

})

const filterDate = document.getElementById("filterDate")
filterDate.addEventListener("change", function (releaseDate) {
    container.innerHTML = ""
    filterByDate(releaseDate.target.value, allFilms).forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))
})

const orderRanking = document.getElementById("orderRanking")
orderRanking.addEventListener("change", function (rt_score) {
    container.innerHTML = ""
    orderByRanking(rt_score.target.value, allFilms).forEach(oneFilm => container.appendChild(generateHTML(oneFilm)))
})

//[forEach] {se puede acceder con .}
const nodostatistics = document.getElementById("statistics")
nodostatistics.addEventListener("click", function () {


    const average = statistics(allFilms)
    container.innerHTML = `<p class = "average">El promedio de las edades de los personajes es de  ${average} años</p> <div class="characters"></div>`


})



//generar nodo div para poner imagen y mandarlo a la pantalla
/*
if (input.value == "mostrar") {
 personajes.style.visibility = "mostrar"
 const image = document.createElement(src)
 const personajes = allFilms.films.people.age
 container.innerHTML = personajes
 console.log(personajes);
}*/



// cambiar texto promedio
// cambiar boton datos extra
// cambiar score a estrellas


/*variables
condicionales
funcion call back

mapy for each
expresiones y sentenicas
datos primitivos y no primitivos

manipulacion del DOM*/
//container.innerHTML = `<p class="texto">"El promedio de edades es" ${redondeado} </p>`
    //console.log("div", "p"); // auiq poner crear nodos
    //let text = document.createTextNode("El promedio de edades en los personajes es " resultado);