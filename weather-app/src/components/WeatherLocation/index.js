/* Componente padre de Location y WeatherData */
import React, { Component } from 'react';
import './styles.css';
import { CircularProgress } from '@material-ui/core';
import { PropTypes } from 'prop-types';
import transformWeather from '../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

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

    constructor(props) {
        super(props);

        const { city } = props;

        this.state = {
            city,
            data: null
        }
    }

    componentDidMount() {
        this.handleUpdateComponent();
    }

    handleUpdateComponent = () => {

        const api_wheather = getUrlWeatherByCity(this.state.city);

        fetch(api_wheather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newData = transformWeather(data);
            console.log(newData);

            this.setState({
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

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired
}

export default WeatherLocation;