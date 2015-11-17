export const units = [
  {
    id: 1,
    type: 'Mage',
    hp: '100',
    mp: '50',
    movement: '5'
  },
  {
    id: 2,
    type: 'Healer',
    hp: '80',
    mp: '75',
    movement: '4'
  },
  {
    id: 3,
    type: 'Knight',
    hp: '150',
    mp: '0',
    movement: '4'
  },
  {
    id: 4,
    type: 'Archer',
    hp: '120',
    mp: '0',
    movement: '6'
  },
  {
    id: 5,
    type: 'Scout',
    hp: '80',
    mp: '10',
    movement: '7'
  }
];

export const equipment = [
  {
    id: 1,
    name: 'Sword',
    damage: '10',
    durability: '100'
  },
  {
    id: 2,
    name: 'Axe',
    damage: '12',
    durability: '100'
  },
  {
    id: 3,
    name: 'Bow',
    damage: '8',
    durability: '100'
  },
  {
    id: 4,
    name: 'Spell Tome',
    damage: '5',
    durability: '100'
  }

];

export const friends = [
	{
		id: 1,
		name: 'Carlos',
		status: 'offline'
	},
	{
		id: 2,
		name: 'Alejandro',
		status: 'offline'
	},
	{
		id: 3,
		name: 'Barberto',
		status: 'online'
	}
];

export const turn = {
  active: true,
  selected: -1
};

export const terrains = [
{
  id: 0,
  name: 'plains',
  defense: 1,
  avoid: 0,
  movementSlow: 2,
  passable: true
},
{
  id: 1,
  name: 'forest',
  defense: 0,
  avoid: 1,
  movementSlow: 0.5,
  passable: true
},
{
  id: 2,
  name: 'desert',
  defense: 0,
  avoid: 0,
  movementSlow: 3,
  passable: true
},
{
  id: 3,
  name: 'snow',
  defense: 0,
  avoid: 0,
  movementSlow: 3,
  passable: true
},
{
  id: 4,
  name: 'mountain',
  defense: 2,
  avoid: 2,
  movementSlow: 1,
  passable: false
},
{
  id: 5,
  name: 'lake',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: false
},
{
  id: 6,
  name: 'building',
  defense: 2,
  avoid: 2,
  movementSlow: 1,
  passable: true
}
];

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

export function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

export function shuffle(array) {
  let arrayAux = array.slice();
  for (let i = arrayAux.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = arrayAux[i];
    arrayAux[i] = arrayAux[j];
    arrayAux[j] = temp;
  }
  return arrayAux;
}

export const board = createBoard(8, terrains);

export const boardSize = board.length;

export const initialState = {
  units, equipment, board, friends, turn
};

