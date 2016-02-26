import { pushState } from 'redux-router';

import { SET_BOARDS, CHANGE_OVERLAY_ARRAY, UPDATE_BOARD, CHANGE_TURN } from './action_types';

import { createBoardWithRiver } from '../../utils/boardGenerator.js';
import { randomNumber } from '../../utils/generalFunctions';
import { allUnits } from '../../utils/Units';

export const navigate = (path) => pushState(null, path);

//SEARCH GAME ACTIONS
export function searchNewGame(userId) {
  const firebase = new Firebase('https://darkness-caress.firebaseio.com');
  firebase.child('matchmaking').once('value', snapshot => {
    if(!snapshot.val()) {
      firebase.child('matchmaking').push(userId);
    }else{
      const matchmakingObject = snapshot.val();
      const firstKey = Object.keys(matchmakingObject)[0];
      const opponent = matchmakingObject[firstKey];
      sendSolicitationNotification(opponent, userId, firebase);
      firebase.child(`matchmaking/${firstKey}`).remove();
    }
  });
}

/*
function matchmake(userAsking, userReceiving, firebase) {
  sendSolicitatingNotification(userAsking, userReceiving, firebase);
  sendSolicitationNotification(userReceiving, userAsking, firebase);
}
*/

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

//CREATE BOARD ACTIONS
export function createNewBoard(idOne, idTwo) {
  const firebase = new Firebase('https://darkness-caress.firebaseio.com');
  let newBoard = createBoardWithRiver(8, 2, 'river');
  newBoard = fillBoardWithUnits(newBoard);
  const newBoardReference = firebase.child('boards').push({board: newBoard, turn: idOne, 0: idOne, 1: idTwo});
  const newBoardId = newBoardReference.key();
  addBoardToUser(idOne, newBoardId, firebase);
  addBoardToUser(idTwo, newBoardId, firebase);
}

function fillBoardWithUnits(board) {
  for (let i = 0; i < 6; i++) {
    const unit = allUnits[randomNumber(1, 16)];
    board = placeOneUnit(unit, board, 0);
    board = placeOneUnit(unit, board, 1);
  };
  return board;
}

function placeOneUnit(unit, board, side) {
  const boardSize = board.length;
  const positionX = randomNumber(0, boardSize);
  const positionY = side === 0 ? randomNumber(0, Math.floor(boardSize / 2)) : randomNumber(Math.ceil(boardSize / 2), boardSize);
  if(board[positionX][positionY].passable === false || board[positionX][positionY].unit != null) {
    board = placeOneUnit(unit, board, side);
  }else{
    unit = Object.assign({}, unit, {army: side});
    board[positionX][positionY] = Object.assign({}, board[positionX][positionY], {unit: unit});
  }
  return board;
}

function addBoardToUser(userId, boardId, firebase) {
  firebase.child(`users/${userId}/myBoards`).once('value', snapshot => {
    const boardArray = snapshot.val() || [];
    firebase.child(`users/${userId}/myBoards`).set([boardId, ...boardArray]);
  });
  firebase.child(`users/${userId}/status`).set('playing');
}

//TURN ACTIONS
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
    const finalBoard = endTurnInRedux(board, boardId, dispatch);
    endTurnInFirebase(boardId, finalBoard, firebase);
  };
}

function endTurnInRedux(board, boardId, dispatch) {
  const finalBoard = board.map( row => {
    return row.map( square => {
      if(square.unit && square.unit.image) {
        square.unit = Object.assign({}, square.unit, {active: true});
      }else{
        square.unit = null;
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
