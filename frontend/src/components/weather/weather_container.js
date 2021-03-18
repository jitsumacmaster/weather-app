import { connect } from 'react-redux';
import { getWeather } from '../../actions/weather_actions';
import { getGeoLocation } from '../../actions/geolocation_actions';
import Weather from './weather';

const mapStateToProps = (state) => {
  return {
    geolocation: state.geolocation,
    weather: state.weather,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGeoLocation: () => dispatch(getGeoLocation()),
    getWeather: location => dispatch(getWeather(location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Weather);