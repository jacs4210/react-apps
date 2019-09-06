/* Componente padre de Location y WeatherData */
import React from 'react';

/* Componentes hijos */
import Location from './Location';
import WeatherData from './WeatherData';

/* Componente funcional sin parámetros. El componente hijo Location recibe como parámetro el atributo city */
const WeatherLocation = () => {
    return (
        <div>
            <Location city={"Cali"} />
            <WeatherData />
        </div>
    );
}

export default WeatherLocation;