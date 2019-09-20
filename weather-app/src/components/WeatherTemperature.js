/* Componente Hijo, no es padre */
import React from 'react';
import WeatherIcons from 'react-weathericons';

const icons = {
    sunny: 'day-sunny',
    rain: 'day-rain'
}

const getWeatherIcon = state => {
    const icon = icons[state] || 'day-sunny';
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