console.log("Hello World!");

// Daten über DOM in HTML einfügen 
// per document.querySelector
/* const cards_container = document.querySelector("#cards-container");
const name_container = document.querySelector(".name-container"); */


// Daten der API abfragen
const places = [
    {
        city: "Narbonne",
        longitutde: 3.0034,
        latitude: 43.1833,
    },
    {
        city: "Galway",
        longitutde: 2.3522,
        latitude: 43.2130,
    },
    {
        city: "Hamburg",
        longitutde: 3.8767,
        latitude: 43.6119,
    },
    {
        city: "Sardinien",
        longitutde: 4.3601,
        latitude: 43.8367,
    },
    {
        city: "Marokko",
        longitutde: 4.8055,
        latitude: 43.9493,
    },
];

async function loadWeather() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=43.184&longitude=3.0014&daily=sunset,wind_speed_10m_max&hourly=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m'; // mit korrekter API-URL ersetzen
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}7
const data = await loadWeather();
console.log(data); // gibt die Daten der API oder false in der Konsole aus