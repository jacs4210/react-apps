/* Componente padre de Location y WeatherData */
import React, { Component } from 'react';
import './styles.css';
import { CircularProgress } from '@material-ui/core';
import transformWeather from '../../services/transformWeather';
import { api_wheather } from '../../constants/api_url';

/* Componentes hijos */
import Location from './Location';
import WeatherData from './WeatherData';

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
            data: null
        }
    }

    componentDidMount() {
        this.handleUpdateComponent();
    }

    handleUpdateComponent = () => {
        // let resolve = await fetch(api_wheather);
        fetch(api_wheather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newData = transformWeather(data);
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
                {data ? <WeatherData data={data} /> : <CircularProgress />}
            </div>
        );
    }
}

export default WeatherLocation;