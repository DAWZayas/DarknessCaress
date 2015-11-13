import { SELECT_SQUARE } from '../actions';

function selectSquare(state, id) {
  const selection = {
    selected: id
  };
  return Object.assign({}, state, selection);
}

export function turnReducer(state = {}, action) {
	switch (action.type) {
  	case SELECT_SQUARE:
  		return selectSquare(state, action.id);
  	default:
  		return state;
  }
}
