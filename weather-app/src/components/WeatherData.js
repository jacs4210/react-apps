/* Componente Padre de WeatherTemperature y WeatherExtraInfo */
import React from 'react';

/* Componentes Hijos */
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

/* Componente funcional que no recibe paramatros. Los 2 componentes hijos tienen propiedades a recibir como parámetros de entrada*/
const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature temp={32} />
            <WeatherExtraInfo extraInfo={"Información Extra"} />
        </div>
    );
}

export default WeatherData;