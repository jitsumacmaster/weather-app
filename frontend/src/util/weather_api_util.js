import axios from 'axios';

export const getWeather = ({ latitude, longitude }) => {
  return axios.get(`/api/weather/?latitude=${latitude}&longitude=${longitude}`);
};

