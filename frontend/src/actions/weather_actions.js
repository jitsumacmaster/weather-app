import { getWeather as getWeatherAPI } from '../util/weather_api_util';

export const RECEIVE_WEATHER = "RECEIVE_WEATHER";
export const RECEIVE_WEATHER_ERROR = "RECEIVE_WEATHER_ERROR";

export const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather,
});

export const receiveWeatherError = error => ({
    type: RECEIVE_WEATHER_ERROR,
    error,
})

export const getWeather = coords => dispatch => (
    getWeatherAPI(coords)
      .then(weather => dispatch(receiveWeather(weather.data)))
      .catch(err => dispatch(receiveWeatherError(err)))
  );


