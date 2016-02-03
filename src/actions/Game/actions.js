import { pushState } from 'redux-router';

import { CHANGE_OVERLAY_ARRAY, UPDATE_BOARD, CHANGE_TURN } from './action_types';

export const navigate = (path) => pushState(null, path);

export function searchNewGame(userId) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('matchmaking').transaction( matchmaking => (matchmaking || []).concat(userId) , () => {}, false );
  };
}

export function updateOverlay(boardId, overlayObject) {
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_OVERLAY_ARRAY,
      boardId,
      overlayObject
    });
  };
}

export function updateBoard(boardId, newBoard) {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_BOARD,
      boardId,
      newBoard
    });
  };
}

export function uploadBoardToFirebase(boardId, newBoard) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`boards/${boardId}/board`).transaction( board => newBoard, () => {}, false );
  };
}

export function endTurn(boardId, newBoard) {
  return (dispatch, getState) => {
    const finalBoard = newBoard.map( row => {
      return row.map( square => {
        if(square.unit !== undefined) {
          square.unit = Object.assign({}, square.unit, {active: true});
        }
        return square;
      })
    });
    dispatch({
      type: CHANGE_TURN,
      boardId,
      finalBoard
    });
    const { firebase } = getState();
    firebase.child(`boards/${boardId}`).transaction( boardObject => {
      boardObject.turn = boardObject.turn === boardObject[0] ? boardObject[1] : boardObject[0];
      boardObject.board = finalBoard;
      return boardObject;
    }, () => {}, false );
  };
}
