const units = [
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

const equipment = [
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

const terrains = [
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
  id: 3,
  name: 'desert',
  defense: 0,
  avoid: 0,
  movementSlow: 3,
  passable: true
},
{
  id: 4,
  name: 'snow',
  defense: 0,
  avoid: 0,
  movementSlow: 3,
  passable: true
},
{
  id: 5,
  name: 'mountain',
  defense: 2,
  avoid: 2,
  movementSlow: 1,
  passable: false
},
{
  id: 7,
  name: 'lake',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: false
},
{
  id: 9,
  name: 'building',
  defense: 2,
  avoid: 2,
  movementSlow: 1,
  passable: true
}
];

const friends = [
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

const turn = {
  active: true,
  selected: -1
};

let terrainComplete = [];
function randomNumber(max, min){ return Math.round(Math.random() * max) + min; }
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
function createBoard(size) {
  let idSquare = 0;
  let _board = [];
  generateTerrain(randomNumber(3, 0), size);
  shuffle(terrainComplete);
  for (let i = 0; i < size; i++) {
    _board[i] = [];
    for (let j = 0; j < size; j++) {
      _board[i][j] = generateSquare(idSquare++); 
      
    }
  }
  return _board.slice();
}
function generateTerrain(type, size){terrainComplete=createTerrain(type, size);}
function generateSquare(idSquare) {
  return {
    id: idSquare, //size * i + j, Buen intento Carlos. :(
    terrain: terrainComplete.pop(),
    unit: false,
    //path: 'url/img',
    interactive: false
  };
}
function takeType(type){
  array=['Plains', 'Forest', 'Desert', 'Snow'];
  return array[type];
}
function createTerrain(type, size){
  let terrain = multiplierTerrain(iterateTakeSquares(determineType(takeType(type))), size);
  let terrainObjets = [];
  let count = 0;
  for (let i = 0; i < terrain.length; i++) {
    for (let j = 0; j < terrain[i]; j++) {
      terrainObjets[count]=terrains[i].name;
      count++;
    }
  }
  return terrainObjets;
}
function determineType(type){
  if (type==='Plains') terrain = [(-1), 30, 40, 30, 30, 30, 25];
  else if(type==='Forest') terrain = [40, (-1), 30, 30, 30, 30, 25];
  else if(type==='Desert') terrain = [40, 30, (-1), 30, 30, 30, 25];
  else terrain = [40, 30, 30, (-1), 30, 30, 25];
  return terrain; 
}
function iterateTakeSquares(terrain, size){
  let terrainBase = 0;
  let terrainBasePosition = 0;
  for (let i = 0; i < terrain.length; i++) {
    if(terrain[i]!==-1){
    terrain[i] = takeSquares(terrain[i], size);
    terrainBase+=terrain[i];
    }else terrainBasePosition=i;
  }
  terrain[terrainBasePosition] = size-terrainBase;
  return terrain;
}
function multiplierTerrain(terrain, size){
  for (let i = 0; i < terrain.length; i++){
    terrain[i]=terrain[i]*size;
  }
  return terrain;
}
function takeSquares(percent, size){
  return Math.floor((randomNumber(percent, 0))*size/100);
}

export const initialState = {
  units: units,
  equipment: equipment,
  board: createBoard(4),
  friends: friends,
  turn: turn
};
