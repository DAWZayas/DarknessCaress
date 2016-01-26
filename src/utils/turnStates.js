/*TURN GUIDE
	START: NOTHING
	MOVING: CALCULATING POSSIBLE MOVES
	MOVED: CHOSEN NEW POSITION, NOT COMMITED
	ATTACKING: CALCULATING POSSIBLE ATTACKS
	*END: COMMIT CHANGES TO FIREBASE AND RESTART
	*RETURN: NOTHING IS COMMITED, RESTART
*/
state = {
	emptyOverlayArray: emptyOverlayArray,
  overlayArray: emptyOverlayArray,
  movedSquare: [-1, -1],
  selectedSquare: [-1, -1],
  selectedUnit: null,
  turn: 'start'
}

//CREATE A FUNCTION createNewState = (position, unit, oldState) => newState ???
