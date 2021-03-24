import React from 'react';
import WeatherContainer from '../weather/weather_container'
import SearchContainer from '../search/search_container'


class MainPage extends React.Component {
  render() {
    return (
      <div>
        <SearchContainer/>
        <WeatherContainer/>
      </div>
    );
  }
}

export default MainPage;