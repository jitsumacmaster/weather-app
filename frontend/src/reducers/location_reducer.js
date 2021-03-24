import { SET_LOCATION, } from '../actions/location_actions';
  
  const LocationReducer = (state = {location: ''}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
      case SET_LOCATION:
        newState.location = action.location;
        return newState;
      default:
        return state;
    }
  };
  
  export default LocationReducer;