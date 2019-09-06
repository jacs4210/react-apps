/* Componente Hijo, no es padre */
import React from 'react';

/* Componente funcional que recibe parámetros para ser usado en un span */
const WeatherTemperature = (props) => {
    return (
        <div>
            <span>{props.temp}°</span>
        </div>
    );
}

export default WeatherTemperature;