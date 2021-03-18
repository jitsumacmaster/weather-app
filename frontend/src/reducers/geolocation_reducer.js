import { RECEIVE_GEOLOCATION, } from '../actions/geolocation_actions';
  
  const GeoLocationReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case RECEIVE_GEOLOCATION:
        newState = action.geolocation;
        return newState;
      default:
        return state;
    }
  };
  
  export default GeoLocationReducer;