import React from 'react';
import Icon from "../icon/icon";
import Temperature from "../temperature/temperature";
import Stars from "../stars/stars";

class Weather extends React.Component {
  constructor(props) {
    super(props);

    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.props.getGeoLocation()
              .then(() => this.props.getWeather(this.props.geolocation.coords))
              // .ther(() => this.setState({location: this.props.weather.name}));
  }

  getWeather() {
    if(this.props.weatherAPIerror) {
      return (
        <div>
          We're sorry. We could not retrieve the weather for your location.
        </div>
      )
    } else if (this.props.weather?.weather) {
      let description = this.props.weather.weather[0].description
      let location = this.props.location
      return (
        <div>
          <Icon icon={this.props.weather.weather[0].icon}/>
          <div className="descr">
            {description} for {location}
          </div>
          <br/>
          <Temperature temperature={this.props.weather.main.temp}/>
        </div>
      )
    } else {
      return (
        <div className="loading">
          Fetching Weather Data for your Location...
          <br/>
          If this message persits please check and make sure that 
          sharing location is permitted by your browser or select a 
          location using the searchbar.
        </div>
      )
    }
  }
  
  render() {
    return (
      <div className="weather">
        <div className="title">WEATHER by JITSU</div>
        {this.getWeather()}
        <Stars/>
      </div>
    );
  }
}

export default Weather;