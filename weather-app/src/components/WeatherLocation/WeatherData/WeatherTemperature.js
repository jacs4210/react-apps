/* Componente Hijo, no es padre */
import React from 'react';
import WeatherIcons from 'react-weathericons';
import { CLOUD, CLOUDY, SUN, RAIN, WINDY } from '../../../constants/weathers';
import propTypes from 'prop-types';
import './styles.css';

const icons = {
    [CLOUD]: 'cloud',
    [CLOUDY]: 'cloudy',
    [SUN]: 'day-sunny',
    [RAIN]: 'day-rain',
    [WINDY]: 'windy'
}

const getWeatherIcon = state => {
    const icon = icons[state] || SUN;
    const iconSize = '4x';
    return <WeatherIcons className="weatherIconTemperatureCont" name={icon} size={iconSize} />
}

/* Componente funcional que recibe parámetros para ser usado en un span */
const WeatherTemperature = ({ temp, state }) => {
    return (
        <div className="weatherTemperatureCont">
            {getWeatherIcon(state)}
            <span className="temperature">{`${temp}`}</span>
            <span className="temperatureType">{`C°`}</span>
        </div>
    );
}

WeatherTemperature.propTypes = {
    temp: propTypes.number.isRequired,
    state: propTypes.string.isRequired
}

export default WeatherTemperature;