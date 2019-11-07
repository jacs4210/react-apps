/* Componente padre de Location y WeatherData */
import React, { Component } from 'react';
import './styles.css';
import convert from 'convert-units';

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

    getTemperature = kelvin => {
        return Number(convert(kelvin).from('K').to('C').toFixed(2));
    }

    getWeatherState = () => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemperature(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }

    handleUpdateComponent = () => {
        // let resolve = await fetch(api_wheather);
        fetch(api_wheather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newData = this.getData(data);
            console.log(newData);

            this.setState({
                city: 'Cali',
                data: newData
            });
        }).catch(error => {
            console.log(error);
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