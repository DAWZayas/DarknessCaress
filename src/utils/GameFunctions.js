import * as gameActions from '../actions/Game';



/*  #########################################
    # @ Game.jsx isEndOfTurn, isEndOfGame, endGame
*/


function isEndOfTurn(myArmy, boardId, newBoard) {
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
  const previousOverlayObject = boardObject.overlayObject;
    const updatedOverlayArray = overlayArray ? overlayArray : previousOverlayObject.overlayArray;
    const updatedMovedSquare = movedSquare ? movedSquare : previousOverlayObject.movedSquare;
    const updatedSelectedSquare = selectedSquare ? selectedSquare : previousOverlayObject.selectedSquare;
    const updatedSelectedUnit = selectedUnit ? selectedUnit : previousOverlayObject.selectedUnit;
    const updatedPhase = phase ? phase : previousOverlayObject.phase;
  return {
      overlayArray:updatedOverlayArray,
      movedSquare:updatedMovedSquare,
      selectedSquare:updatedSelectedSquare,
      selectedUnit:updatedSelectedUnit,
      phase:updatedPhase
  };
}

export function selectSquare(position, board, boardObject, boardId) {
  const unit = position[0] !== -1 ? board[position[0]][position[1]].unit || null : null;
  const overlayArray = boardObject.overlayObject.emptyOverlayArray;
  const overlayObject = handleOverlayObject(boardObject, overlayArray, null, position, unit, 'start');
  updateOverlay(boardId, overlayObject);
}

export function deSelectSquare(boardId, boardObject, position) {
  const overlayArray = boardObject.overlayObject.emptyOverlayArray;
  const overlayObject = handleOverlayObject(boardObject, overlayArray, DEFAULT_POSITION, position, null, 'start');
  updateOverlay(boardId, overlayObject);
}

export function selectMove(boardObject, board, boardId) {
  const selectedSquare = boardObject.overlayObject.selectedSquare
  const selectedUnit= boardObject.overlayObject.selectedUnit
  const newOverlayArray = calculateMoves(board, selectedSquare, selectedUnit);
  const overlayObject = handleOverlayObject(boardObject, newOverlayArray, DEFAULT_POSITION, null, null, 'moving');
  updateOverlay(boardId, overlayObject);
}

export function moveUnit(position, board, boardObject) {
  if( youCanMove (boardObject, position) ){
    const emptyOverlayArray = boardObject.overlayObject.emptyOverlayArray;
    const overlayObject = handleOverlayObject(boardObject, emptyOverlayArray, position, null, null, 'moved');
    updateOverlay(boardObject, boardId, overlayObject);
  }
}

export function youCanMove(boardObject, position){
  const positionX = position[0];
  const positionY = position[1];
  const canYouMove = boardObject.overlayObject.overlayArray[positionX][positionY] === MOVE ? true : false;
  const isThereNoUnit = !board[positionX][positionY].unit ? true : false;
  return canYouMove && isThereNoUnit;
}

export function selectAttack(boardObject, board) {
  const attackingPosition = boardObject.overlayObject.movedSquare[0] != -1 ? boardObject.overlayObject.movedSquare : boardObject.overlayObject.selectedSquare;
  const newOverlayArray = calculateAttackArea(board, attackingPosition, boardObject.overlayObject.selectedUnit);
  const overlayObject = handleOverlayObject(boardObject, newOverlayArray, null, null, null, 'attacking');
  updateOverlay(boardId, overlayObject);
}

export function deSelectAttack(boardObject, overlayArray, boardId) {
  const overlayObject = handleOverlayObject(boardObject, overlayArray, null, null, null, 'moved');
  updateOverlay(boardId, overlayObject);
}

export function attackUnit(boardId, position, boardObject, board) {
  const positionX = position[0];
  const positionY = position[1];
  if(youCanAttack(boardObject, board)) {
    const enemyUnitBeforeAttack = board[positionX][positionY].unit;
    const enemyUnitAfterAttack = enemyUnitBeforeAttack.hp - 10 > 0 ? Object.assign({}, enemyUnitBeforeAttack, {hp: enemyUnitBeforeAttack.hp - 10}) : null;
    if(enemyUnitAfterAttack === null) isEndOfGame(enemyUnitBeforeAttack.army);
    let newBoard = board.slice();
    newBoard[positionX][positionY] = Object.assign({}, board[positionX][positionY], { unit: enemyUnitAfterAttack });
    updateBoard(boardId, newBoard);
    endMove();
  }
}

export function youCanAttack(boardObject, board){
  const canYouAttack = boardObject.overlayObject.overlayArray[positionX][positionY] === ATTACK;
  const thereIsAnyUnit = board[positionX][positionY].unit;
  const unitsArmy = board[positionX][positionY].unit.army;
  const otherUnitsArmy = boardObject.overlayObject.selectedUnit.army;
  return thereIsAnyUnit && canYouAttack  && unitsArmy !== otherUnitsArmy
}

export function endMove(boardId) {
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
  updateBoard(boardId, newBoard);
  uploadBoardToFirebase(boardId, newBoard);
  const emptyOverlayArray = boardObject.overlayObject.emptyOverlayArray;
  const overlayObject = handleOverlayObject(boardObject, overlayArray, selectedSquare, finalUnit, DEFAULT_POSITION, 'start');
  updateOverlay(boardId, overlayObject);
  isEndOfTurn(finalUnit.army, boardId, newBoard)
}
/*
*/
