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
  return {
    type: CHANGE_OVERLAY_ARRAY,
    boardId,
    overlayObject
  };
}

export function updateBoard(boardId, newBoard) {
  return {
    type: UPDATE_BOARD,
    boardId,
    newBoard
  };
}

export function uploadBoardToFirebase(boardId, newBoard) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`boards/${boardId}/board`).set(newBoard);
  };
}


//@ Game.jsx isEndOfTurn
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


//@ Game.jsx isEndOfGame, endGame
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
//#########################################################################
//#                     12345678 Benin of game functions
//#########################################################################



/*  #########################################
    # @ Game.jsx isEndOfTurn, isEndOfGame, endGame
*/


function isEndOfTurn(myArmy, boardId, newBoard, board) {
  let unitIsActive = false;
  board.map( row => {
    row.map( square => {
      if(square.unit !== undefined && square.unit.army === myArmy && square.unit.active !== false) {
        unitIsActive = true;
      }
    })
  });
  if(!unitIsActive) {
    endTurn(boardId, newBoard);
  }
}

function isEndOfGame(myArmy) {
  let unitIsAlive = false;
  board.map( row => {
    row.map( square => {
      if(square.unit !== undefined && square.unit.army === myArmy) {
        unitIsAlive = true;
      }
    })
  });
  if(!unitIsAlive) {
    this.endGame(auth.id);
  }
}

function endGame(winner) {
  endTheGame(boardId, winner);
}
/*  #########################################
    # @ Game.jsx selectSquare, deSelectSquare, selectMove, moveUnit, slectAttack, deSelectAttack, attackUnit
*/
const DEFAULT_POSITION = [-1, -1];

function handleOverlayObject(boardObject, overlayArray, movedSquare, selectedSquare, selectedUnit, phase){
  debugger;
  const previousOverlayObject = boardObject.overlayObject;
    const updatedOverlayArray = overlayArray ? overlayArray : previousOverlayObject.overlayArray;
    const updatedMovedSquare = movedSquare ? movedSquare : previousOverlayObject.movedSquare;
    const updatedSelectedSquare = selectedSquare ? selectedSquare : previousOverlayObject.selectedSquare;
    const updatedSelectedUnit = selectedUnit ? selectedUnit : previousOverlayObject.selectedUnit;
    const updatedPhase = phase ? phase : previousOverlayObject.phase;
    const emptyOverlayArray = generateOverlayArray(boardObject.overlayObject.overlayArray.length);
  return {
      overlayArray:updatedOverlayArray,
      movedSquare:updatedMovedSquare,
      selectedSquare:updatedSelectedSquare,
      selectedUnit:updatedSelectedUnit,
      phase:updatedPhase
  };
}

export function selectSquare(position, board, boardObject, boardId) {
  return (dispatch, getState) => {
    const unit = position[0] !== -1 ? board[position[0]][position[1]].unit || null : null;
    const overlayArray = boardObject.overlayObject.emptyOverlayArray;
    const overlayObject = handleOverlayObject(boardObject, overlayArray, null, position, unit, 'start');
    dispatch(updateOverlay(boardId, overlayObject));
  }
}

export function deSelectSquare(boardId, boardObject, position) {
  return (dispatch, getState) => {
      debugger;
    const overlayArray = boardObject.overlayObject.emptyOverlayArray;
    const overlayObject = handleOverlayObject(boardObject, overlayArray, DEFAULT_POSITION, position, null, 'start');
    dispatch(updateOverlay(boardId, overlayObject));
  }
}

export function selectMove(boardObject, board, boardId) {
  return (dispatch, getState) => {
    const selectedSquare = boardObject.overlayObject.selectedSquare
    const selectedUnit= boardObject.overlayObject.selectedUnit
    const newOverlayArray = calculateMoves(board, selectedSquare, selectedUnit);
    const overlayObject = handleOverlayObject(boardObject, newOverlayArray, DEFAULT_POSITION, null, null, 'moving');
    dispatch(updateOverlay(boardId, overlayObject));
  }
}

export function moveUnit(position, board, boardObject, boardId) {
  return (dispatch, getState) => {
    if( youCanMove (boardObject, position, board) ){
      const emptyOverlayArray = boardObject.overlayObject.emptyOverlayArray;
      const overlayObject = handleOverlayObject(boardObject, emptyOverlayArray, position, null, null, 'moved');
      updateOverlay(boardObject, boardId, overlayObject);
    }
  }
}

function youCanMove(boardObject, position, board){
  const positionX = position[0];
  const positionY = position[1];
  const canYouMove = boardObject.overlayObject.overlayArray[positionX][positionY] === MOVE ? true : false;
  const isThereNoUnit = !board[positionX][positionY].unit ? true : false;
  return canYouMove && isThereNoUnit;
}

export function selectAttack(boardObject, board, boardId) {
  return (dispatch, getState) => {
    const attackingPosition = boardObject.overlayObject.movedSquare[0] != -1 ? boardObject.overlayObject.movedSquare : boardObject.overlayObject.selectedSquare;
    const newOverlayArray = calculateAttackArea(board, attackingPosition, boardObject.overlayObject.selectedUnit);
    const overlayObject = handleOverlayObject(boardObject, newOverlayArray, null, null, null, 'attacking');
    dispatch(updateOverlay(boardId, overlayObject));
  }
}

export function deSelectAttack(boardObject, overlayArray, boardId) {
  return (dispatch, getState) => {
    const overlayObject = handleOverlayObject(boardObject, overlayArray, null, null, null, 'moved');
    dispatch(updateOverlay(boardId, overlayObject));
  }
}

export function attackUnit(boardId, position, boardObject, board) {
  return (dispatch, getState) => {
    const positionX = position[0];
    const positionY = position[1];
    if(youCanAttack(boardObject, board)) {
      const enemyUnitBeforeAttack = board[positionX][positionY].unit;
      const enemyUnitAfterAttack = enemyUnitBeforeAttack.hp - 10 > 0 ? Object.assign({}, enemyUnitBeforeAttack, {hp: enemyUnitBeforeAttack.hp - 10}) : null;
      if(enemyUnitAfterAttack === null) isEndOfGame(enemyUnitBeforeAttack.army);
      let newBoard = board.slice();
      newBoard[positionX][positionY] = Object.assign({}, board[positionX][positionY], { unit: enemyUnitAfterAttack });
      dispatch(updateBoard(boardId, newBoard));
      endMove();
    }
  }
}

export function youCanAttack(boardObject, board){
  const canYouAttack = boardObject.overlayObject.overlayArray[positionX][positionY] === ATTACK;
  const thereIsAnyUnit = board[positionX][positionY].unit;
  const unitsArmy = board[positionX][positionY].unit.army;
  const otherUnitsArmy = boardObject.overlayObject.selectedUnit.army;
  return thereIsAnyUnit && canYouAttack  && unitsArmy !== otherUnitsArmy
}

export function endMove(boardObject, boardId, board, overlayArray) {
  return (dispatch, getState) => {
    const unmoved = -1;
    let selectedSquare = [-1, -1];
    const startingPositionX = boardObject.overlayObject.selectedSquare[0];
    const startingPositionY = boardObject.overlayObject.selectedSquare[1];
    const finalPositionX = boardObject.overlayObject.movedSquare[0];
    const finalPositionY = boardObject.overlayObject.movedSquare[1];
    const finalUnit = Object.assign({}, boardObject.overlayObject.selectedUnit, {active: false});
    let newBoard = board.slice();
    if(finalPositionX === -1) {
      newBoard[startingPositionX][startingPositionY] = Object.assign({}, board[startingPositionX][startingPositionY], { unit: finalUnit });
      selectedSquare = boardObject.overlayObject.selectedSquare;
    }else{
      newBoard[startingPositionX][startingPositionY] = Object.assign({}, board[startingPositionX][startingPositionY], { unit: null });
      newBoard[finalPositionX][finalPositionY] = Object.assign({}, board[finalPositionX][finalPositionY], { unit: finalUnit });
      selectedSquare = boardObject.overlayObject.movedSquare;
    }
    dispatch(updateBoard(boardId, newBoard));
    uploadBoardToFirebase(boardId, newBoard);
    const emptyOverlayArray = boardObject.overlayObject.emptyOverlayArray;
    const overlayObject = handleOverlayObject(boardObject, overlayArray, selectedSquare, finalUnit, DEFAULT_POSITION, 'start');
    dispatch(updateOverlay(boardId, overlayObject));
    isEndOfTurn(finalUnit.army, boardId, newBoard, board);
  };
}
/*
*/




//#########################################################################
//#                     12345678 End of game functions
//#########################################################################


//!\\ turnFunctions :




/*COLOR GUIDE
	0: NOTHING
	1: MOVEMENT (BLUE)
	2: ATTACK (RED)
	3: HEALING (GREEN)
*/
export const BLANKSPACE = 0;
export const MOVE = 1;
export const ATTACK = 2;
export const HEALING = 3;

//CALCULATE AREA OF MOVEMENT
export function calculateMoves(boardArray, selectedPositionArray, hero) {
	const boardSize = boardArray.length;
	const positionX = selectedPositionArray[0];
	const positionY = selectedPositionArray[1];
	const position = boardArray[positionX][positionY];
	let overlayArray = generateOverlayArray(boardSize);
	hero.fly ?
		calculateFlyingMoves(boardArray, overlayArray, selectedPositionArray, hero.movement + 1, hero) :
		calculateWalkingMoves(boardArray, overlayArray, selectedPositionArray, hero.movement + position.movementSlow, hero);
	overlayArray[selectedPositionArray[0]][selectedPositionArray[1]] = BLANKSPACE;
	return overlayArray;
}

function calculateWalkingMoves(boardArray, overlayArray, selectedPositionArray, numberOfMoves, hero) {
	const positionX = selectedPositionArray[0];
	const positionY = selectedPositionArray[1];
	const boardSize = boardArray.length;
	const position = boardArray[positionX][positionY];
	if(position.passable === false || numberOfMoves - position.movementSlow < 0 || (position.unit != undefined && position.unit.army != hero.army)) {
		return false;
	}else{
		overlayArray[positionX][positionY] = MOVE;
		positionX + 1 < boardSize ? calculateWalkingMoves(boardArray, overlayArray, [positionX + 1, positionY], numberOfMoves - position.movementSlow, hero) : null;
		positionX - 1 >= 0 ? calculateWalkingMoves(boardArray, overlayArray, [positionX - 1, positionY], numberOfMoves - position.movementSlow, hero) : null;
		positionY + 1 < boardSize ? calculateWalkingMoves(boardArray, overlayArray, [positionX, positionY + 1], numberOfMoves - position.movementSlow, hero) : null;
		positionY - 1 >= 0 ? calculateWalkingMoves(boardArray, overlayArray, [positionX, positionY - 1], numberOfMoves - position.movementSlow, hero) : null;
	}
}

function calculateFlyingMoves(boardArray, overlayArray, selectedPositionArray, numberOfMoves, hero) {
	const positionX = selectedPositionArray[0];
	const positionY = selectedPositionArray[1];
	const boardSize = boardArray.length;
	const position = boardArray[positionX][positionY];
	if(numberOfMoves <= 0 || position.unit != null && position.unit.army != hero.army) {
		return false;
	}else{
		overlayArray[positionX][positionY] = MOVE;
		positionX + 1 < boardSize ? calculateFlyingMoves(boardArray, overlayArray, [positionX + 1, positionY], numberOfMoves - 1, hero) : null;
		positionX - 1 >= 0 ? calculateFlyingMoves(boardArray, overlayArray, [positionX - 1, positionY], numberOfMoves - 1, hero) : null;
		positionY + 1 < boardSize ? calculateFlyingMoves(boardArray, overlayArray, [positionX, positionY + 1], numberOfMoves - 1, hero): null;
		positionY - 1 >= 0 ? calculateFlyingMoves(boardArray, overlayArray, [positionX, positionY - 1], numberOfMoves - 1, hero) : null;
	}
}

//CALCULATE AREA OF ATTACK
export function calculateAttackArea(boardArray, selectedPositionArray, hero) {
	const boardSize = boardArray.length;
	let overlayArray = generateOverlayArray(boardSize);
	hero.range.map( range => calculateAttackCircle(boardSize, overlayArray, selectedPositionArray, range) );
	return overlayArray;
}

function calculateAttackCircle(boardSize, overlayArray, selectedPositionArray, heroRange) {
	const positionX = selectedPositionArray[0];
	const positionY = selectedPositionArray[1];
	for (let range = heroRange, aux = 0; range > 0; range--, aux++) {
		if(positionX + range < boardSize && positionY + aux < boardSize) {
			overlayArray[positionX + range][positionY + aux] = ATTACK;
		}
		if(positionX - range >= 0 && positionY - aux >= 0) {
			overlayArray[positionX - range][positionY - aux] = ATTACK;
		}
		if(positionX - aux >= 0 && positionY + range < boardSize) {
			overlayArray[positionX - aux][positionY + range] = ATTACK;
		}
		if(positionX + aux < boardSize && positionY + range >= 0) {
			overlayArray[positionX + aux][positionY - range] = ATTACK;
		}
	};
	return overlayArray;
}

//HELPER FUNCTION
export function generateOverlayArray(boardSize) {
  const BLANKSPACE = 0;
  console.log(">>>>>>>>>>>>>>>>>>>>XXX Shiets Happens: "+BLANKSPACE);
	let overlayArray = [];
	for (let i = 0; i < boardSize; i++) {
		overlayArray[i] = [];
		for (let j = 0; j < boardSize; j++) {
			overlayArray[i][j] = BLANKSPACE;
		};
	};
  console.log(">>>>>>>>>>>>>>>>>>>>XXX Shiets Happens2: "+overlayArray);
	return overlayArray;
}
