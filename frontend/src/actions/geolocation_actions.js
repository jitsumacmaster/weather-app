import { getGeoLocationFromBrowser } from '../util/geolocation_api_util';

export const RECEIVE_GEOLOCATION = "RECEIVE_GEOLOCATION";

export const receiveGeoLocation = geolocation => ({
    type: RECEIVE_GEOLOCATION,
    geolocation,
});

export const getGeoLocation = () => dispatch => {
    return getGeoLocationFromBrowser()
    .then(geolocation => dispatch(receiveGeoLocation(geolocation)))
    .catch(err => console.log(err))
}


