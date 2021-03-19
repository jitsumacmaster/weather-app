import React from 'react';
import { withRouter } from 'react-router-dom';

import Icon from "../icon/icon"
import Temperature from "../temperature/temperature"

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.props.getGeoLocation()
    .then(() => {
      this.props.getWeather(this.props.geolocation.coords)})
  }

  getWeather() {
    if (this.props.weather.weather) {
      let description = this.props.weather.weather[0].description
      let location = this.props.weather.name
      console.log(this.props.weather)
      return (
        <div>
          <Icon icon={this.props.weather.weather[0].icon}/>
          {description} in {location}
          <br/>
          <Temperature temperature={this.props.weather.main.temp}/>

        </div>
      )
    } else {
      return (
        <div>
          Fetching Weather Data for your Location
          <br/>
          If this message persits please check and make sure that 
          sharing location is permitted by your browser.
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        {this.getWeather()}
      </div>
    );
  }
}

export default withRouter(Weather);