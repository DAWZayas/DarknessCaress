/*COLOR GUIDE
	0: NOTHING
	1: MOVEMENT (BLUE)
	2: ATTACK (RED)
	3: HEALING (GREEN)
*/
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
	overlayArray[selectedPositionArray[0]][selectedPositionArray[1]] = 0;
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
		overlayArray[positionX][positionY] = 1;
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
		overlayArray[positionX][positionY] = 1;
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
			overlayArray[positionX + range][positionY + aux] = 2;
		}
		if(positionX - range >= 0 && positionY - aux >= 0) {
			overlayArray[positionX - range][positionY - aux] = 2;
		}
		if(positionX - aux >= 0 && positionY + range < boardSize) {
			overlayArray[positionX - aux][positionY + range] = 2;
		}
		if(positionX + aux < boardSize && positionY + range >= 0) {
			overlayArray[positionX + aux][positionY - range] = 2;
		}
	};
	return overlayArray;
}

//HELPER FUNCTION
export function generateOverlayArray(boardSize) {
	let overlayArray = [];
	for (let i = 0; i < boardSize; i++) {
		overlayArray[i] = [];
		for (let j = 0; j < boardSize; j++) {
			overlayArray[i][j] = 0;
		};
	};
	return overlayArray;
}
