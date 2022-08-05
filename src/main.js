import data from './data/ghibli/ghibli.js';

const textNav = document.getElementById("textNav");
const btnNav = document.getElementById("btnNav");
const btnClose = document.getElementById("btnClose");

btnNav.addEventListener("click", function () {
    textNav.style.display = "block";
});

btnClose.addEventListener("click", function () {
    textNav.style.display = "none";
});

function divCreator (dataElement){
    let div = document.createElement('div');
    div.id = "div" + dataElement.id;
    div.className = "organizedData";
    document.getElementById('bigDivs').appendChild(div);
    let elementName = document.createElement('p');
    elementName.innerHTML = dataElement.name;
    elementName.className = "dataName";
    document.getElementById("div" + dataElement.id).appendChild(elementName);
    let image = document.createElement('img');
    image.src = dataElement.img;
    image.className = "DataImage";
    image.id = dataElement.id;
    document.getElementById("div" + dataElement.id).appendChild(image);
    image.addEventListener('click', function () { dataWindow(image.id); });  
}

for (let x = 0; x < data.films.length; x++) {
    divCreator(data.films[x]);
    data.films[x].people.forEach(character => {
        divCreator(character);
    });
    data.films[x].vehicles.forEach(vehicle => {
        divCreator(vehicle);
    });
    data.films[x].locations.forEach(location => {
        divCreator(location);
    });
}

const showData = document.getElementById("root");
showData.addEventListener('click', function () { showData.style.display = 'none' })
function dataWindow(filmName) {
    showData.style.display = "block"
    for (let x = 0; x < data.films.length; x++) {
        if (filmName === data.films[x].id) {
            document.getElementById('data1').innerHTML = ('Name: ' + data.films[x].title);
            document.getElementById('data2').innerHTML = ('Description: ' + data.films[x].description);
            document.getElementById('data3').innerHTML = ('Director: ' + data.films[x].director);
            document.getElementById('data4').innerHTML = ('Producer: ' + data.films[x].producer);
            document.getElementById('data5').innerHTML = ('Release date: ' + data.films[x].release_date);
            document.getElementById('data6').innerHTML = ('Rotten Tomato Score: ' + data.films[x].rt_score);
            break;
        }
        else {
            data.films[x].people.forEach(name => {
                if (filmName === name.id) {
                document.getElementById('data1').innerHTML = ('Name: ' + name.name);
                document.getElementById('data2').innerHTML = ('Age: ' + name.age);
                document.getElementById('data3').innerHTML = ('Eye color: ' + name.eye_color);
                document.getElementById('data4').innerHTML = ('Gender: ' + name.gender);
                document.getElementById('data5').innerHTML = ('Hair color: ' + name.hair_color);
                document.getElementById('data6').innerHTML = ('Apears in: ' + data.films[x].title);
                }
                });
                data.films[x].vehicles.forEach(name => {
                if (filmName === name.id) {
                document.getElementById('data1').innerHTML = ('Name: ' + name.name);
                document.getElementById('data2').innerHTML = ('Description: ' + name.description);
                document.getElementById('data3').innerHTML = ('Vehicle class: ' + name.vehicle_class);
                document.getElementById('data4').innerHTML = ('Pilot: ' + name.pilot.name);
                document.getElementById('data5').innerHTML = ('Length: ' + name.length);
                document.getElementById('data6').innerHTML = ('Apears in: ' + data.films[x].title);
                }
                });
                data.films[x].locations.forEach(name => {
                if (filmName === name.id) {
                document.getElementById('data1').innerHTML = ('Name: ' + name.name);
                document.getElementById('data2').innerHTML = ('Climate: ' + name.climate);
                document.getElementById('data3').innerHTML = ('Residents: ' + name.residents);
                document.getElementById('data4').innerHTML = ('Water surface: ' + name.surface_water);
                document.getElementById('data5').innerHTML = ('Terrain: ' + name.terrain);
                document.getElementById('data6').innerHTML = ('Appears in: ' + data.films[x].title);
                }
                });
        }
    }
}
