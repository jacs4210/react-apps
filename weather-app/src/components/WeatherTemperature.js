/* Componente Hijo, no es padre */
import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, SUN, RAIN, WINDY } from '../constants/weathers';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'day-rain',
    [WINDY]: 'windy'
}

const getWeatherIcon = state => {
    const icon = icons[state] || SUN;
    return <WeatherIcons name={icon} size={'1x'} />
}

/* Componente funcional que recibe parámetros para ser usado en un span */
const WeatherTemperature = ({ temp, state }) => {
    return (
        <div>
            <div>{getWeatherIcon(state)}</div>
            <span>{`${temp} C°`}</span>
        </div>
    );
}

export default WeatherTemperature;