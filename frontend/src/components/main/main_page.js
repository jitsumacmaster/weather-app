import React from 'react';
// import { Link } from 'react-router-dom';
import WeatherContainer from '../weather/weather_container'


class MainPage extends React.Component {

  render() {
    return (
      <div>
        <WeatherContainer/>
      </div>
    );
  }
}

export default MainPage;