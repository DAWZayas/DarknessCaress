import { SELECT_SQUARE } from '../actions';

function selectSquare(state, position, index) {
  const selection = {
    selected: position,
    board: index
  };
  return Object.assign({}, state, selection);
}

export default function turnReducer(state = {}, action) {
	switch (action.type) {
  	case SELECT_SQUARE:
  		return selectSquare(state, action.position, action.index);
  	default:
  		return state;
  }
}
