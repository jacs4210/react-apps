/* Componente padre de Location y WeatherData */
import React from 'react';
import './styles.css';

/* Componentes hijos */
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from '../../constants/weathers';

const data = {
    temp: 32,
    state: SUN,
    humidity: 80,
    wind: 30
}

/* Componente funcional sin parámetros. El componente hijo Location recibe como parámetro el atributo city */
const WeatherLocation = () => {
    return (
        <div className="weatherLocationCont">
            <Location city={"Cali"} />
            <WeatherData data={data} />
        </div>
    );
}

export default WeatherLocation;