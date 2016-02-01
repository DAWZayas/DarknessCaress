import { createBoardWithRiver } from '../../utils/boardGenerator.js';
import { pushState } from 'redux-router';

import { randomNumber } from '../../utils/generalFunctions';
import { allUnits } from '../../utils/Units';

export const navigate = (path) => pushState(null, path);

export function searchNewGame(userId) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const matchmakingReference = firebase.child('matchmaking');
    matchmakingReference.transaction( matchmaking => (matchmaking || []).concat([userId]) );
  };
}

export function updateBoard(board, boardId) {
	return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`boards/${boardId}/board`).set(board);
  };
}
