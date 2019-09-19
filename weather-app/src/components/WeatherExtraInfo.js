/* Componente Hijo, no es padre */
import React from 'react';

/*  Componente funcional que recibe propiedades y son utilizadas en un div.
    Se utiliza un template string para poder ubicar caracteres con variables y mostrarlas en la aplicación.
*/
const WeatherExtraInfo = ({ humidity, wind }) => (
    <div>
        <span>{`${humidity}% - `}</span>
        <span>{`${wind}`}</span>
    </div>
);

export default WeatherExtraInfo;