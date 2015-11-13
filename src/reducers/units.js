import { SET_UNIT } from '../actions';

function setUnit(state, unit) {
  return state.slice().concat(unit);
}

export default function unitsReducer(state = [], action) {
	switch (action.type) {
  	case SET_UNIT:
  		return setUnit(state, action.unit);
  	default:
  		return state;
  }
}
