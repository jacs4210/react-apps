/* Información para el consumo del api restful del clima */
const location = 'Bogotá,co';
const api_key = 'faf012e567446e635936610c74f5d5b0';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/wheater';

// Url final que será utilizada para obtener la información del clima.
export const api_wheather = `${url_base_weather}?q=${location}&appid=${api_key}`;