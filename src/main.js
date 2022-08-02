import { example } from './data.js';
import { anotherExample } from './data.js';
import data from './data/ghibli/ghibli.js';

for (let x = 0; x < data.films.length; x++) {
    let div = document.createElement('div');
    div.id = data.films[x].id;
    div.className = "organizedData";
    div.innerHTML = data.films[x].title;
    document.getElementById('bigDivs').appendChild(div);
    div.addEventListener('click', function () { dataWindow(div.id); });
    for (let i = 0; i < data.films[x].people.length; i++) {
        let div = document.createElement('div');
        div.id = data.films[x].people[i].id;
        div.className = "organizedData";
        div.innerHTML = data.films[x].people[i].name;
        document.getElementById('bigDivs').appendChild(div);
        div.addEventListener('click', function () { dataWindow(div.id); });
    }
    for (let i = 0; i < data.films[x].vehicles.length; i++) {
        let div = document.createElement('div');
        div.id = data.films[x].vehicles[i].id;
        div.className = "organizedData";
        div.innerHTML = data.films[x].vehicles[i].name;
        document.getElementById('bigDivs').appendChild(div);
        div.addEventListener('click', function () { dataWindow(div.id); });
    }
    for (let i = 0; i < data.films[x].locations.length; i++) {
        let div = document.createElement('div');
        div.id = data.films[x].locations[i].id;
        div.className = "organizedData";
        div.innerHTML = data.films[x].locations[i].name;
        document.getElementById('bigDivs').appendChild(div);
        div.addEventListener('click', function () { dataWindow(div.id); });
    }
};

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
};