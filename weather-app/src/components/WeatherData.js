import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';

const WeatherData = () => (
    <div>
        <WeatherTemperature temp={32}/>
        <WeatherExtraInfo extraInfo={"Información Extra"}/>
    </div>
);

export default WeatherData;