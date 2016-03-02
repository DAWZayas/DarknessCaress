import { pushState } from 'redux-router';

import { DELETE_BOARD, SET_BOARDS, CHANGE_OVERLAY_ARRAY, UPDATE_BOARD, CHANGE_TURN } from './action_types';

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

export function sendSolicitationNotification(userReceiving, userAsking, firebase) {
  firebase.child(`users/${userReceiving}/notifications`).push({
    "type": "gameSolicitation",
    "userId": userAsking
  });
}

//CREATE BOARD ACTIONS
export function createNewBoard(idOne, idTwo) {
  const firebase = new Firebase('https://darkness-caress.firebaseio.com');
  let newBoard = createBoardWithRiver(8, 2, 'river');
  newBoard = fillBoardWithUnits(newBoard, idOne, idTwo, firebase);
  saveBoard(newBoard, idOne, idTwo, firebase);
}

/*PROMISES
export function createNewBoard(idOne, idTwo) {
  const FIRST_ARMY = 0;
  const SECOND_ARMY = 1;
  const firebase = new Firebase('https://darkness-caress.firebaseio.com');
  let board = createBoardWithRiver(8, 2, 'river');
  new Promise( resolve => {
    const midBoard = fillSideWithUnits(board, idTwo, SECOND_ARMY, firebase);
    resolve(midBoard);
  })
    .then( anotherBoard => fillSideWithUnits(anotherBoard, idOne, FIRST_ARMY, firebase) )
    .then( finalBoard => saveBoard(finalBoard, idOne, idTwo, firebase) );
}
*/

function saveBoard(board, idOne, idTwo, firebase) {
  const newBoardReference = firebase.child('boards').push({board: board, turn: idOne, 0: idOne, 1: idTwo});
  const newBoardId = newBoardReference.key();
  addBoardToUser(idOne, newBoardId, firebase);
  addBoardToUser(idTwo, newBoardId, firebase);
}

function fillBoardWithUnits(board, idOne, idTwo, firebase) {
  const midBoard = fillSideWithUnits(board, idOne, 0, firebase);
  const finalBoard = fillSideWithUnits(midBoard, idTwo, 1, firebase);
  //return finalBoard;
}

function fillSideWithUnits(board, userId, side, firebase) {
  firebase.child(`users/${userId}/heroes`).once('value', snapshot => {
    const heroes = snapshot.val();
    const size = heroes.length;
    const numbers = getNumbers(6, size);
    numbers.map( number => {
      const heroId = parseInt(heroes[number]);
      firebase.child(`heroes/${heroId}`).once('value', snapshot => {
        board = placeOneUnit(snapshot.val(), board, side);
      });
    });
  });
  //return board;
}
/*
firebase.child('heroes').once('value', snapshot => {
  totalHeroes = snapshot.val();
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
});
*/
function getNumbers(quantity, size) {
  let numbers = [];
  let counter = 0;
  while(counter < quantity) {
    const number = randomNumber(0, size);
    if(numbers.indexOf(number) === -1) {
      numbers[counter] = number;
      counter++;
    }
  }
  return numbers;
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
  //return board;
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

export function endTheGame(boardId, winner, loser) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    rewardWinner(winner, firebase);
    rewardLoser(loser, firebase);
    firebase.child(`boards/${boardId}/winner`).set(winner);
  };
}

function rewardWinner(winner, firebase) {
  rewardExp(winner, 25, firebase);
  rewardMmr(winner, 30, firebase);
  rewardPoints(winner, 2, firebase);
  updateRecord(winner, 1, 0, 0, firebase);
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function rewardLoser(loser, firebase) {
  rewardExp(loser, 10, firebase);
  rewardMmr(loser, -15, firebase);
  rewardPoints(loser, 1, firebase);
  updateRecord(loser, 0, 1, 0, firebase);
}

function rewardExp(player, exp, firebase) {
  firebase.child(`users/${player}/exp`).transaction( snapshot => {
    let points = snapshot || 0;
    points = points + exp;
    if(points === 100) {
      points = 0;
      firebase.child(`users/${player}/level`).transaction( snapshot => {
        let level = snapshot || 0;
        return level + 1;
      }, () => {}, false);
    }
    return points;
  }, () => {}, false);
}

function rewardMmr(player, mmr, firebase) {
  firebase.child(`users/${player}/mmr`).transaction( snapshot => {
    return snapshot + mmr;
  }, () => {}, false);
}

function rewardPoints(player, points, firebase) {
  firebase.child(`users/${player}/points`).transaction( snapshot => {
    return snapshot + points;
  }, () => {}, false);
}

function updateRecord(player, victory, defeat, tie, firebase) {
  firebase.child(`users/${player}/record`).transaction( snapshot => {
    let record = snapshot || {victories: 0, defeats: 0, ties: 0};
    return {victories: record.victories + victory, defeats: record.defeats + defeat, ties: record.ties + tie};
  }, () => {}, false);
}

export function eraseBoardFromFirebase(userId, boardId) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    eraseBoardFromMyBoard(userId, boardId, dispatch, firebase);
    //eraseBoardFromBoards(userId, boardId, firebase);
  };
}

export function eraseBoardFromRedux(boardId) {
  return (dispatch) => {
    dispatch({
      type: DELETE_BOARD,
      board: boardId
    });
  };
}

function eraseBoardFromMyBoard(userId, boardId, dispatch, firebase) {
  firebase.child(`users/${userId}/myBoards`).transaction( snapshot => {
    return (snapshot || []).filter( board => board !== boardId);
  }, () => {}, false);
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
