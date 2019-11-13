import convert from 'convert-units';
import { CLOUD, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from '../constants/weathers';

const getTemperature = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
}

const getWeatherState = weather => {

    let { id } = weather;
    let weatherIcon;

    if (id < 300) {
        weatherIcon = THUNDER;
    } else if (id > 300 && id < 500) {
        weatherIcon = DRIZZLE;
    } else if (id > 500 && id < 600) {
        weatherIcon = RAIN;
    } else if (id > 600 && id < 700) {
        weatherIcon = SNOW;
    } else if (id === 800) {
        weatherIcon = SUN;
    } else {
        weatherIcon = CLOUD;
    }

    return weatherIcon;
}

const transformWeather = weather_data => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(weather_data.weather[0]);
    const temperature = getTemperature(temp);

    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    }

    return data;
}

export default transformWeather;