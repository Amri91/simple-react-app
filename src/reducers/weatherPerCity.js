import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS, REQUEST_WEATHER } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case REQUEST_WEATHER:
      return {
        ...state,
        [action.payload.city.toLowerCase()]: {isFetching: true}
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        [action.payload.city.toLowerCase()]: {
          isFetching: false, data: action.payload.data
        }
      };
    // Ignored for now
    case FETCH_WEATHER_FAILURE:
    default:
      return state;
  }
}
