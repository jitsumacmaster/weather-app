import { combineReducers } from 'redux';
import weather from './weather_reducer';
import geolocation from './geolocation_reducer';

const RootReducer = combineReducers({
  weather,
  geolocation,
});

export default RootReducer;