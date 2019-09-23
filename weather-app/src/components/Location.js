/** Componente Padre de WeatherLocation */

// Es necesario importar del módulo react el objeto React para poder crear componentes funcionales.
import React from 'react';
import propTypes from 'prop-types';

// Componente funcional.
// Recibe unas propiedades como atributo y estas son refladas en la vista a la hora de ser renderizada.
const Location = ({ city }) => {
    return (
        <div>
            <h1>{city}</h1>
        </div>
    );
}

Location.propTypes = {
    city: propTypes.string.isRequired
}

// Para que un componente sea usado desde otro punto de la aplicación, es necesario exportarlo.
export default Location;