import React from 'react';
import { withRouter } from 'react-router-dom';

class Temperature extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            celcius: true,
        }

        this.celcius = this.celcius.bind(this);
        this.farenheit = this.farenheit.bind(this);

    }

    celcius() {
        this.setState({ celcius: true })
    }

    farenheit() {
        this.setState({ celcius: false })
    }

    convertTemperature() {
        return this.state.celcius ? (this.props.temperature - 273.15).toFixed(2) : (((this.props.temperature - 273.15) * 9/5) +32).toFixed(2)
    }

    render() {
        return (
            <div>
                <p>
                {this.convertTemperature()}&deg;
                    {this.state.celcius ? 'C' : 'F'}
                </p>

                    <button type="button" onClick={this.celcius}>&deg;C</button>
                    <button type="button" onClick={this.farenheit}>&deg;F</button>
            </div>
        );
    }
}

export default withRouter(Temperature);