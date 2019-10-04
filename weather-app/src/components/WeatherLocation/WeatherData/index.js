/* Componente Padre de WeatherTemperature y WeatherExtraInfo */
import React from 'react';
import { CLOUD, CLOUDY, SUN, RAIN, WINDY } from '../../../constants/weathers';
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

export default WeatherData;