import { connect } from 'react-redux';
import { getWeather } from '../../actions/weather_actions';
import { setLocation } from '../../actions/location_actions';
import Search from './search';

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    weatherAPIerror: state.weatherAPIerror,
    location: state.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getWeather: location => dispatch(getWeather(location)),
    setLocation: location => dispatch(setLocation(location)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);