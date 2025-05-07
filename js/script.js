// Daten der API abfragen
async function loadAllWeatherData() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=43,54,34,23&longitude=3,4,6,8&daily=sunset,wind_speed_10m_max&hourly=wind_speed_10m,wind_direction_10m,temperature_2m&timeformat=unixtime'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const allWeatherData = await loadAllWeatherData();
console.log(allWeatherData);

const selectedWeatherData = document.querySelector('#locations');


// Daten aus der API auswählen
let windSpeeds = allWeatherData[1].hourly.wind_speed_10m;
let windDirections = allWeatherData[1].hourly.wind_direction_10m;
let times = allWeatherData[1].hourly.time;
let sunset = allWeatherData[1].daily.sunset[0]; // nur das erste Element verwenden

let windSpeeds2 = allWeatherData[2].hourly.wind_speed_10m;
let windDirections3 = allWeatherData[2].hourly.wind_direction_10m;
let times4 = allWeatherData[2].hourly.time;
let sunset5 = allWeatherData[2].daily.sunset[0]; // nur das erste Element verwenden

let outputHTML = '';


// Loop über die Daten
for (let i = 0; i < 10; i++) { // z. B. erste 5 Stunden
    let wind = windSpeeds[i];
    let wind2 = windSpeeds2[i];
    let direction = windDirections[i];
    let time = new Date(times[i] * 1000).toLocaleTimeString(); // optional

    outputHTML += `
        <div class="card">
            <h2 class="test1">Wind: ${wind} km/h</h2>.
            <h2 class="test2">Wind: ${wind2} km/h</h2>
            <h2 class="test2">Richtung: ${direction}°</h2>
            <p>Zeit: ${time}</p>
            <p>Sunset: ${new Date(sunset * 1000).toLocaleTimeString()}</p>
        </div>`;
}


// Daten über DOM in HTML einfügen
selectedWeatherData.innerHTML = outputHTML;


// kompletter Knopf ... 
// korrekte Longitude und Latitude für den Link
// braucht es einen Loop?
// wie kann ich die Daten in die HTML einfügen?
// wie kann ich nur die gewünschten Daten abfragen?