/* Componente Hijo, no es padre */
import React from 'react';

/* Componente funcional que recibe propiedades y son utilizadas en un div. */
const WeatherExtraInfo = (props) => (
    <div>{props.extraInfo}</div>
);

export default WeatherExtraInfo;