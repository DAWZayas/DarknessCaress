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
    name: 'Barba',
    status: 'online'
  }
];

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

export const terrains = [
{
  name: 'forest',
  defense: 1,
  avoid: 0,
  movementSlow: 2,
  passable: true
},
{
  name: 'path',
  defense: 0,
  avoid: 1,
  movementSlow: 0.5,
  passable: true
},
{
  name: 'plain',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: true
},
{
  name: 'desert',
  defense: 0,
  avoid: 0,
  movementSlow: 3,
  passable: true
},
{
  name: 'snow',
  defense: 0,
  avoid: 0,
  movementSlow: 3,
  passable: true
},
{
  name: 'mountain',
  defense: 2,
  avoid: 2,
  movementSlow: 1,
  passable: false
},
{
  name: 'river',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: false
},
{
  name: 'lake',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: false
},
{
  name: 'lava',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: false
},
{
  name: 'building',
  defense: 2,
  avoid: 2,
  movementSlow: 1,
  passable: true
},
{
  name: 'bridge',
  defense: 0,
  avoid: 0,
  movementSlow: 1,
  passable: true
},
{
  name: 'wall',
  defense: 10,
  avoid: 10,
  movementSlow: 10,
  passable: false
}
];

function createBoard(size) {
  let idSquare = 0;
  let _board = [];
  let number = Math.floor(Math.random()*5);
  for (let i = 0; i < size; i++) {
    _board[i] = [];
    for (let j = 0; j < size; j++) {
      _board[i][j] = generateSquare(idSquare++, number);
    };
  };
  return _board.slice();
}

function generateSquare(idSquare, number) {
  return {
    id: idSquare, //size * i + j, Buen intento Carlos. :(
    terrain: generateInitialTerrain(number),
    unit: false,
    //path: 'url/img',
    interactive: false
  };
}

function generateInitialTerrain(number) {
  return terrains[number].name;
}

export const board = createBoard(8);

export const turn = {
  active: true,
  selected: -1
};

export const initialState = {
  units, equipment, board, friends, turn
};
