/* Componente Core o Padre de todos, tiene de hijo a WeatherLocation */
import React, { Component } from 'react';

/* Componente Hijo */
import LocationList from './components/LocationList';

/* Estilos a usar en la aplicación */
import './App.css';

const cities = [
    'Bogota,col',
    'Buenos aires,ar',
    'Rio de janeiro,bra'
];

/* Componente funcional de la aplicación */
class App extends Component {
    render() {
        return (
            <div className="App">
                <LocationList cities={cities} />
            </div>
        );
    }
}

export default App;
