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
  passable: true,
  image: 'plain'
},
{
  id: 1,
  name: 'forest',
  defense: 0,
  avoid: 1,
  movementSlow: 0.5,
  passable: true,
  image: 'forest'
},
{
  id: 2,
  name: 'desert',
  defense: 0,
  avoid: 0,
  movementSlow: 3,
  passable: true,
  image: 'desert1'
},
{
  id: 3,
  name: 'snow',
  defense: 0,
  avoid: 0,
  movementSlow: 3,
  passable: true,
  image: 'snow'
},
{
  id: 4,
  name: 'mountain',
  defense: 2,
  avoid: 2,
  movementSlow: 1,
  passable: false,
  image: 'mountain'
},
{
  id: 6,
  name: 'building',
  defense: 2,
  avoid: 2,
  movementSlow: 1,
  passable: true,
  image: 'building1'
}
];

export const riverLikeTerrains = [
{
  id: 2,
  name: 'path',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: true
},
{
  id: 6,
  name: 'river',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: false
},
{
  id: 8,
  name: 'lava',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: false
},
{
  id: 10,
  name: 'bridge',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: true
},
{
  id: 11,
  name: 'wall',
  defense: 10,
  avoid: 10,
  movementSlow: 10,
  passable: false
}
];

export const logging = false;

export const boardSize = 8;

export function createBoardWithRiver(boardSize, numberOfRivers, typeOfRiver) {
  const boardBase = createBoard(boardSize, terrains);
  const rivers = riverCreator(numberOfRivers, typeOfRiver);
  const board = applyRivers(boardBase, rivers);
  return board;
}

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

export function determineType(type) { //PORCENTAJES, SOBRAN O FALTAN DOS TIPOS DE TERRENO....
  let terrain = [];
  switch(type) {
    case 1:
      terrain = [40, (-1), 30, 30, 30, 10];
      break;
    case 2:
      terrain = [40, 30, (-1), 30, 30, 10];
      break;
    case 3:
      terrain = [40, 30, 30, (-1), 30, 10];
      break;
    default:
      terrain = [(-1), 30, 40, 30, 30, 10];
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
    name: currentTerrain,
    unit: false,
    interactive: false,
    image: currentTerrain
  };
}

export function takeSquares(percent, size) {
  return Math.floor((randomNumber(0, percent)) * size / 100);
}
/*
export function applyRiversOld(boardBase){
  const rivers = riverCreator(1, 'river');
  let board = boardBase;
  rivers.map(river => {
    river.map(tile => {
      board[tile.position.y][tile.position.x] = tile;
    });
  });
  return board;
}
*/
export function applyRivers(boardBase, rivers){
  let board = boardBase;
  rivers.map(river => {
    river.map(tile => {
      board[tile.position.y][tile.position.x] = cloneRiver(tile);
    });
  });
  return board;
}

export function riverCreator(rivers, terrainName) {
  let arrayOfRivers = [];
  let u = 0;
  for(let i = 0; i < rivers; i++) {
    arrayOfRivers[i]=[];
    arrayOfRivers[i][0] = firstRiverCreator(terrainName);
    u = 1;
    while (!arrayOfRivers[i][u-1].isDead) {
      arrayOfRivers[i][u] = cloneRiver(arrayOfRivers[i][u-1]);
      goWithTheFlow(arrayOfRivers[i][u]);
      u++;
    } 
  }
  return arrayOfRivers;
}

export function firstRiverCreator(terrainName) {
  let position = initPos();
  let id = generateId(position);
  let terrainIndex = getTerrainIndexByName(terrainName);
  let direction = randomBool() ? 'x' : 'y';
  let imageName = terrainName + direction.toUpperCase();
  let firstRiverObject = {
    name: riverLikeTerrains[terrainIndex].name,
    defense: riverLikeTerrains[terrainIndex].defense,
    avoid: riverLikeTerrains[terrainIndex].avoid,
    movementSlow: riverLikeTerrains[terrainIndex].movementSlow,
    passable: riverLikeTerrains[terrainIndex].passable,
    unit: false,
    interactive: false,
    position: position,
    id: id,   
    sense: randomBool() ? 1 : -1,
    direction: direction,
    isDead: randomBool(),
    hasBridge: false,
    image: imageName
  };
  firstRiverObject.image = setImage(firstRiverObject);
  return firstRiverObject;
}

export function cloneRiver(river) {
  let newPosition = {};
  newPosition.x = river.position.x;
  newPosition.y = river.position.y;
  let newId = generateId(newPosition);
  let clonedRiver = {
    name: river.name,
    defense: river.defense,
    avoid: river.avoid,
    movementSlow: river.movementSlow,
    passable: river.passable,
    unit: false,
    interactive: false,
    position: newPosition,
    id: newId,   
    sense: river.sense,
    direction: river.direction,
    isDead: river.isDead,
    hasBridge: false,
    image: river.image
  };
  return clonedRiver;
}

export function initPos(){
  let pos = {};
  pos.x = randomNumber(0, boardSize);
  pos.y = randomNumber(0, boardSize);
  return pos;
}
/*
export function initPos(){
  let pos = {};
  let bool1 = randomBool();
  let bool2 = randomBool();
  if(bool1) {
    pos.x = bool2 ? randomNumber(0, boardSize) : 0;
    pos.y = bool2 ? 0 : randomNumber(0, boardSize);
  }else{
    pos.x = bool2 ? randomNumber(0, boardSize) : boardSize - 1;
    pos.y = bool2 ? boardSize - 1 : randomNumber(0, boardSize);
  }
  return pos;
}
*/
export function getTerrainIndexByName(name){
  let index = 0;
  for(let i = 0; i < riverLikeTerrains.length; i++){
    if (riverLikeTerrains[i].name === name) index = i;
  }
  return index;
}

export function generateId(position){ return boardSize * position.y + position.x; }

export function previousPosition(i, u){ //  NEVER USED ???
  let p = i;
  let q = u;
  if (p === 0 && q === 0) return false;
  else {
    if ( q === 0 ) {
      p--;
      q = boardSize;
    }else q--;
    return [p, q];
  }
}

export function goWithTheFlow(river){
  let action = generateRandomAction();
  switch(action) {
    case 2:
      turns(river);
    case 1:
      if(!outOfTheMap(advance(cloneRiver(river)))) {
        advance(river);
      }else die(river);
      break;
    default:
      die(river);
  }
}

export function generateRandomAction(){
  let number = randomNumber(0, 10);
  if( number < 6 ) return 1;
  else if( number < 9) return 2;
  else return 3;
}

export function outOfTheMap (position){
  return ( position.x >= boardSize || position.y >= boardSize || position.x < 0 || position.y < 0 ) ? true : false;
}

export function advance(riverLike) {
  riverLike.position[riverLike.direction] = riverLike.position[riverLike.direction] + riverLike.sense;
  riverLike.id = boardSize * riverLike.position.y + riverLike.position.x;
  return riverLike.position;
}

export function turns(riverLike) {
  riverLike.direction = (riverLike.direction === 'x') ? 'y' : 'x';
  riverLike.image = setImage(riverLike);
  return riverLike.direction;
}

export function die(riverLike){ riverLike.isDead = true;}

export function setImage(riverLike) {  return riverLike.image; }

export function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
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

export function randomBool() { return randomNumber(1, 10) > 5 ? true : false; }

export function randomRiver() {
  const number = randomNumber(0, 5);
  const name = riverLikeTerrains[randomNumber(0, 3)].name;
  const board = createBoardWithRiver(boardSize, number, name);
  return board;
}

const board1 = randomRiver();
const board2 = randomRiver();

export const board = [board1, board2];
