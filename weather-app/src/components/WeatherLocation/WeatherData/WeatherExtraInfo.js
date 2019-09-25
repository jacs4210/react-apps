/* Componente Hijo, no es padre */
import React from 'react';
import propTypes from 'prop-types';
import './styles.css';

/*  Componente funcional que recibe propiedades y son utilizadas en un div.
    Se utiliza un template string para poder ubicar caracteres con variables y mostrarlas en la aplicación.
*/
const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <span>{`${humidity}% - `}</span>
        <span>{`${wind}m/s`}</span>
    </div>
);

WeatherExtraInfo.propTypes = {
    humidity: propTypes.number.isRequired,
    wind: propTypes.number.isRequired
}

export default WeatherExtraInfo;