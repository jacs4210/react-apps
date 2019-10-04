/* Componente Padre de WeatherTemperature y WeatherExtraInfo */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

/* Componentes Hijos */
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

/* Componente funcional que no recibe paramatros. Los 2 componentes hijos tienen propiedades a recibir como parámetros de entrada*/
const WeatherData = ({ data: { temp, state, humidity, wind } }) => {
    return (
        <div className="weatherDataCont">
            <WeatherTemperature temp={temp} state={state} />
            <WeatherExtraInfo humidity={humidity} wind={wind} />
        </div>
    );
}

WeatherData.propTypes = {
    data: PropTypes.shape({
        temp: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.number.isRequired
    })
}

export default WeatherData;