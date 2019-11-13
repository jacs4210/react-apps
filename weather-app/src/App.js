/* Componente Core o Padre de todos, tiene de hijo a WeatherLocation */
import React from 'react';

/* Componente Hijo */
import LocationList from './components/LocationList';

/* Estilos a usar en la aplicación */
import './App.css';

/* Componente funcional de la aplicación */
const App = () => {
    return (
        <div className="App">
            <LocationList/>
        </div>
    );
}

export default App;
