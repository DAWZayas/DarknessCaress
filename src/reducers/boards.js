import { SET_BOARDS } from '../actions/Game';

function setBoards(state, boards) {
  return boards;
}

export default function boardsReducer(state = [], action) {
  switch (action.type) {
    case SET_BOARDS:
      return setBoards(state, action.boards);
    default:
      return state;
    }
}
