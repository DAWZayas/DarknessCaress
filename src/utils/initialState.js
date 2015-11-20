import { createBoard } from './boardEngine.js';

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

export const boardSize = 8;

export const board = createBoard(boardSize, terrains);

export const initialState = {
  units, equipment, board, friends, turn
};
