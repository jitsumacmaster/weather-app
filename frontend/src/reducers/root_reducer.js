import { combineReducers } from 'redux';
import weather from './weather_reducer';
import geolocation from './geolocation_reducer';
import location from './location_reducer'

const RootReducer = combineReducers({
  weather,
  geolocation,
  location,
});

export default RootReducer;