// Daten der API abfragen
async function loadWeather() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=43,54&longitude=3,4&daily=sunset,wind_speed_10m_max&hourly=wind_speed_10m,wind_direction_10m,temperature_2m&timeformat=unixtime'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const allData = await loadWeather();
console.log(allData);

let sortedData = [];
allData.forEach(location => {
    sortedData.push({
        name: location.name,
        lat: location.latitude,
        lon: location.longitude,
        wind_speed: location.wind_speed_10m_max,
        wind_direction: location.wind_direction_10m,
        temperature: location.temperature_2m
    });
});

console.log(sortedData);


// Daten über DOM in HTML einfügen
const startmap_container = document.querySelector('#startmap');