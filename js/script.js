// Daten der API abfragen
async function loadAllWeatherData() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=43,54&longitude=3,4&daily=sunset,wind_speed_10m_max&hourly=wind_speed_10m,wind_direction_10m,temperature_2m&timeformat=unixtime'; // mit korrekter API-URL ersetzen
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


// Unix-Timestamp in lesbare Zeit umwandeln
function formatUnixToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString('de-DE', {
        hour: '2-digit',
        minute: '2-digit'
    });
}
console.log(formatUnixToTime(allWeatherData.current_weather.time));


// Daten sortieren
/* let sortedWeatherData = [];
allWeatherData.forEach(location)

console.log(sortedWeatherData); */


// Daten über DOM in HTML einfügen
/* const startmap_container = document.querySelector('#locations'); */