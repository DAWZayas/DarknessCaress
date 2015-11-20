export function createBoard(size, terrains) {
  let idSquare = 0;
  let board = [];
  let random = randomNumber(0, 3);
  let terrainComplete = createTerrain(random, size, terrains);
  terrainComplete = shuffle(terrainComplete);
  for (let i = 0; i < size; i++) {
    board[i] = [];
    for (let j = 0; j < size; j++) {
      let currentTerrain = terrainComplete[idSquare];
      board[i][j] = generateSquare(idSquare, currentTerrain); 
      idSquare++;
    }
  }
  return board.slice();
}

export function createTerrain(type, size, terrains) {
  let percentagesOfTerrain = determineType(type);
  let quantityOfTerrain = iterateTakeSquares(percentagesOfTerrain, size);
  let namesOfTerrain = [];
  let count = 0;
  for (let i = 0; i < quantityOfTerrain.length; i++) {
    for (let j = 0; j < quantityOfTerrain[i]; j++) {
      namesOfTerrain[count] = terrains[i].name;
      count++;
    }
  }
  return namesOfTerrain;
}

export function determineType(type) {
  let terrain = [];
  switch(type) {
    case 1:
      terrain = [40, (-1), 30, 30, 30, 30, 25];
      break;
    case 2:
      terrain = [40, 30, (-1), 30, 30, 30, 25];
      break;
    case 3:
      terrain = [40, 30, 30, (-1), 30, 30, 25];
      break;
    default:
      terrain = [(-1), 30, 40, 30, 30, 30, 25];
  }
  return terrain;
}

export function iterateTakeSquares(terrain, size) {
  let terrainBase = 0;
  let terrainBasePosition = 0;
  for (let i = 0; i < terrain.length; i++) {
    if(terrain[i]!==-1) {
      terrain[i] = Math.round(takeSquares(terrain[i], size) * size);
      terrainBase = terrainBase + terrain[i];
    }else{
      terrainBasePosition=i;
    }
  }
  terrain[terrainBasePosition] = (size * size) - terrainBase;
  return terrain;
}

export function generateSquare(idSquare, currentTerrain) {
  return {
    id: idSquare,
    terrain: currentTerrain,
    unit: false,
    interactive: false
  };
}

export function takeSquares(percent, size) {
  return Math.floor((randomNumber(0, percent)) * size / 100);
}
