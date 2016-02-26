import { SET_OPPONENTS } from '../actions/Game/action_types';

function setOpponents(state, opponents) {
  return opponents;
}

export default function boardsReducer(state = {}, action) {
  switch (action.type) {
    case SET_OPPONENTS:
      return setOpponents(state, action.opponents);
    default:
      return state;
    }
}
