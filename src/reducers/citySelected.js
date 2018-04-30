import { SELECT_CITY } from '../actions';

export default function(state = false, action) {
  switch(action.type){
    case SELECT_CITY:
      return action.payload;
    default:
      return state;
  }
}
