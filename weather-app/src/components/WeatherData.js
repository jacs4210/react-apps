/* Componente Padre de WeatherTemperature y WeatherExtraInfo */
import React from 'react';
import { CLOUD, CLOUDY, SUN, RAIN, WINDY } from '../constants/weathers';

/* Componentes Hijos */
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

/* Componente funcional que no recibe paramatros. Los 2 componentes hijos tienen propiedades a recibir como parámetros de entrada*/
const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature temp={32} state={SUN} />
            <WeatherExtraInfo humidity={80} wind={'30 m/s'} />
        </div>
    );
}

export default WeatherData;