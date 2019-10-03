/* Componente padre de Location y WeatherData */
import React from 'react';
import './styles.css';

/* Componentes hijos */
import Location from './Location';
import WeatherData from './WeatherData';

/* Componente funcional sin parámetros. El componente hijo Location recibe como parámetro el atributo city */
const WeatherLocation = () => {
    return (
        <div className="weatherLocationCont">
            <Location city={"Cali"} />
            <WeatherData />
        </div>
    );
}

export default WeatherLocation;