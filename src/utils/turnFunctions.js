/*COLOR GUIDE
	0: NOTHING
	1: MOVEMENT (BLUE)
	2: ATTACK (RED)
	3: POSITION (GREEN)
*/
//CALCULATE AREA OF MOVEMENT
export function calculateMoves(boardArray, selectedPositionArray, hero) {
	const boardSize = boardArray.length;
	let overlayArray = generateOverlayArray(boardSize);
	hero.fly ? 
		calculateFlyingMoves(boardArray, overlayArray, selectedPositionArray, hero.moves) : 
		calculateWalkingMoves(boardArray, overlayArray, selectedPositionArray, hero.moves);
	overlayArray[selectedPositionArray[0]][selectedPositionArray[1]] = 3;
	return overlayArray;
}

function calculateWalkingMoves(boardArray, overlayArray, selectedPositionArray, numberOfMoves) {
	const positionX = selectedPositionArray[0];
	const positionY = selectedPositionArray[1];
	const position = boardArray[positionX][positionY];
	if(position.passable === false || numberOfMoves - position.movementSlow < 0) {
		return false;
	}else{
		overlayArray[positionX][positionY] = 1;
		calculateWalkingMoves(boardArray, overlayArray, [positionX + 1, positionY], numberOfMoves - position.movementSlow);
		calculateWalkingMoves(boardArray, overlayArray, [positionX - 1, positionY], numberOfMoves - position.movementSlow);
		calculateWalkingMoves(boardArray, overlayArray, [positionX, positionY + 1], numberOfMoves - position.movementSlow);
		calculateWalkingMoves(boardArray, overlayArray, [positionX, positionY - 1], numberOfMoves - position.movementSlow);
	}
}

function calculateFlyingMoves(boardArray, overlayArray, selectedPositionArray, numberOfMoves) {
	const positionX = selectedPositionArray[0];
	const positionY = selectedPositionArray[1];
	const position = boardArray[positionX][positionY];
	overlayArray[positionX][positionY] = 1;
	calculateMoves(boardArray, overlayArray, [positionX + 1, positionY], numberOfMoves - 1);
	calculateMoves(boardArray, overlayArray, [positionX - 1, positionY], numberOfMoves - 1);
	calculateMoves(boardArray, overlayArray, [positionX, positionY + 1], numberOfMoves - 1);
	calculateMoves(boardArray, overlayArray, [positionX, positionY - 1], numberOfMoves - 1);
}

//CALCULATE AREA OF ATTACK
export function calculateAttackArea(boardArray, selectedPositionArray, hero) {
	const boardSize = boardArray.length;
	let overlayArray = generateOverlayArray(boardSize);
	hero.range.map( range => calculateAttackCircle(overlayArray, selectedPositionArray, range) );
	return overlayArray;
}

function calculateAttackCircle(overlayArray, selectedPositionArray, heroRange) {
	const positionX = selectedPositionArray[0];
	const positionY = selectedPositionArray[1];
	for (let range = heroRange, aux = 0; range > 0; range--, aux++) {
		overlayArray[positionX + range][positionY + aux] = 2;
		overlayArray[positionX - range][positionY - aux] = 2;
		overlayArray[positionX - aux][positionY + range] = 2;
		overlayArray[positionX + aux][positionY - range] = 2;
	};
	return overlayArray;
}

//HELPER FUNCTION
export function generateOverlayArray(boardSize) {
	let overlayArray = Array(boardSize).fill(Array(boardSize));
	for (let i = 0; i < boardSize; i++) {
		for (let j = 0; j < boardSize; j++) {
			overlayArray[i][j] = 3;
		};
	};
	return overlayArray;
}
