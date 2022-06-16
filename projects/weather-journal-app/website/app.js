/* Global Variables */
// Personal API Key for OpenWeatherMap API
const apiKey = '14d242caefcc16d1d730d8cb6fec4d96&units=imperial';
const baseURL = `api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&appid=${apiKey}`;


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
