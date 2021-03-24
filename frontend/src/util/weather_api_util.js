import axios from 'axios';

export const getWeather = ({ latitude, longitude, lat, lng}) => {
  if(lat) latitude = lat
  if(lng) longitude = lng
  return axios.get(`/api/weather/?latitude=${latitude}&longitude=${longitude}`);
};

