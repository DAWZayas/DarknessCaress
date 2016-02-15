import { pushState } from 'redux-router';

import { SET_BOARDS, CHANGE_OVERLAY_ARRAY, UPDATE_BOARD, CHANGE_TURN } from './action_types';

export const navigate = (path) => pushState(null, path);

export function searchNewGame(userId) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('matchmaking').once('value', snapshot => {
      if(!snapshot) {
        firebase.child('matchmaking').push(userId);
      }else{
        const matchmakingObject = snapshot.val();
        const firstKey = Object.keys(matchmakingObject)[0];
        const opponent = matchmakingObject[firstKey];
        matchmake(userId, opponent, firebase);
        firebase.child(`matchmaking/${firstKey}`).remove();
      }
    });
  };
}

function matchmake(userAsking, userReceiving, firebase) {
  sendSolicitatingNotification(userAsking, userReceiving, firebase);
  sendSolicitationNotification(userReceiving, userAsking, firebase);
}

function sendSolicitatingNotification(userAsking, userReceiving, firebase) {
  firebase.child(`users/${userAsking}/notifications`).push({
    "type": "gameSolicitating",
    "userId": userReceiving
  });
}

function sendSolicitationNotification(userReceiving, userAsking, firebase) {
  firebase.child(`users/${userReceiving}/notifications`).push({
    "type": "gameSolicitation",
    "userId": userAsking
  });
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
    firebase.child(`boards/${boardId}/board`).set(newBoard);
  };
}

export function endTurn(boardId, board) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const finalBoard = endTurnInRedux(board, dispatch);
    endTurnInFirebase(boardId, finalBoard, firebase);
  };
}

function endTurnInRedux(board, dispatch) {
  const finalBoard = board.map( row => {
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
  return finalBoard;
}

function endTurnInFirebase(boardId, finalBoard, firebase) {
  firebase.child(`boards/${boardId}`).once('value', snapshot => {
    const boardObject = snapshot.val();
    const firstUser = boardObject[0];
    const secondUser = boardObject[1];
    boardObject.turn === firstUser
    ? firebase.child(`boards/${boardId}/turn`).set(secondUser)
    : firebase.child(`boards/${boardId}/turn`).set(firstUser);
    firebase.child(`boards/${boardId}/board`).set(finalBoard);
  });
}

export function endTheGame(boardId, winner) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`boards/${boardId}/winner`).set(winner);
  };
}

export function eraseBoardFromFirebase(userId, boardId) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    eraseBoardFromMyBoard(userId, boardId, dispatch, firebase)
    eraseBoardFromBoards(userId, boardId, firebase);   
  };
}

function eraseBoardFromMyBoard(userId, boardId, dispatch, firebase) {
  firebase.child(`users/${userId}/myBoards`).once('value', snapshot => {
    const myBoards = snapshot.val();
    const newMyBoards = myBoards.filter( board => board !== boardId);
    dispatch({
      type: SET_BOARDS,
      boards: newMyBoards
    });
    firebase.child(`users/${userId}/myBoards`).set(newMyBoards);
  });
}

function eraseBoardFromBoards(userId, boardId, firebase) {
  firebase.child(`boards/${boardId}`).once('value', snapshot => {
    const boardObject = snapshot.val();
    const stateOfErasing = determineStateOfErasing(boardObject, userId);
    stateOfErasing === 2
    ? firebase.child(`boards/${boardId}`).remove()
    : firebase.child(`boards/${boardId}/${stateOfErasing}`).set('done');
  });
}

function determineStateOfErasing(boardObject, userId) {
  let result = 2;
  if(boardObject[0] === userId && boardObject[1] !== 'done') {
    result = 0;
  }else if(boardObject[1] === userId && boardObject[0] !== 'done'){
    result = 1;
  }
  return result;
}
