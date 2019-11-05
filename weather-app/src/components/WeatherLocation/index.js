/* Componente padre de Location y WeatherData */
import React, { Component } from 'react';
import './styles.css';

/* Componentes hijos */
import Location from './Location';
import WeatherData from './WeatherData';
import { SUN } from '../../constants/weathers';

/* Información para el consumo del api restful del clima */
const location = 'Bogotá,co';
const api_key = 'faf012e567446e635936610c74f5d5b0';
const url_base_weather = 'http://api.openweathermap.org/data/2.5/wheater';

// Url final que será utilizada para obtener la información del clima.
const api_wheather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temp: 32,
    state: SUN,
    humidity: 80,
    wind: 30
}

/* Componente funcional sin parámetros. El componente hijo Location recibe como parámetro el atributo city */
/* const WeatherLocation = () => {
    return (
        <div className="weatherLocationCont">
            <Location city={"Cali"} />
            <WeatherData data={data} />
        </div>
    );
} */

/** Componente de clase sin parámetros. */
class WeatherLocation extends Component {

    constructor() {
        super();

        this.state = {
            city: 'Botogá',
            data: data
        }
    }

    handleUpdateComponent = () => {
        // let resolve = await fetch(api_wheather);
        fetch(api_wheather).then(resolve => {
            return resolve.json();
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });

        console.log('Actualizado');

        this.setState({
            city: 'Cali'
        });
    }

    // Método que se encarga de renderizar la vista con este componente.
    render() {

        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateComponent}>Actualizar</button>
            </div>
        );
    }
}

export default WeatherLocation;