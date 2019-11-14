import React from 'react';
import WeatherLocation from './WeatherLocation/index';

const LocationList = ({ cities }) => {
    console.log(cities);
    return (
        <div>
            <WeatherLocation city="Bogota,col" />
            <WeatherLocation city="Buenos aires,ar" />
            <WeatherLocation city="Rio de janeiro,bra" />
        </div>
    );
}

export default LocationList;