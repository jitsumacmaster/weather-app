// import { getGeoLocationFromBrowser } from '../util/geolocation_api_util';

export const SET_LOCATION = "SET_LOCATION";

export const setLocation = location => ({
    type: SET_LOCATION,
    location,
});

// export const getGeoLocation = () => dispatch => {
//     return getGeoLocationFromBrowser()
//     .then(geolocation => dispatch(receiveGeoLocation(geolocation)))
//     .catch(err => console.log(err))
// }


