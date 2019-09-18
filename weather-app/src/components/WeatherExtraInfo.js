/* Componente Hijo, no es padre */
import React from 'react';

/* Componente funcional que recibe propiedades y son utilizadas en un div. */
const WeatherExtraInfo = ({ extraInfo }) => (
    <div>{extraInfo}</div>
);

export default WeatherExtraInfo;