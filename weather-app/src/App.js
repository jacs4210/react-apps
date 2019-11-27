/* Componente Core o Padre de todos, tiene de hijo a WeatherLocation */
import React, { Component } from 'react';

/* Componente Hijo */
import LocationList from './components/LocationList';

/* Estilos a usar en la aplicación */
import './App.css';

/* Componentes de diseño que provee React-Flexbox */
import { Grid, Col, Row } from 'react-flexbox-grid';

const cities = [
    'Bogota,col',
    'Buenos aires,ar',
    'Rio de janeiro,bra'
];

/* Componente funcional de la aplicación */
class App extends Component {
    handledSelectionLocation = city => {
        console.log(`handledSelectionLocation ${city}`);
    }

    render() {
        return (
            <Grid>
                <Row>
                    Titulo
                </Row>
                <Row>
                    <Col xs={12} md={6}>
                        <LocationList cities={cities} onSelectedLocation={this.handledSelectionLocation} />
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="details"></div>
                    </Col>
                </Row>
            </Grid>            
        );
    }
}

export default App;
