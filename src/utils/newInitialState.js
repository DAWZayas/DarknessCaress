//NO LO CAMBIEIS, NO FUNCIONA!!

export const users = [
  {
    id: 1,
    name: 'Carlos',
    status: 'offline',
    characters: [1, 2, 3],
    equipment: [1, 2, 3, 4],
    games: [ id1, id2, id3 ],
    friends: [2, 3]
  },
  {
    id: 2,
    name: 'Alejandro',
    status: 'offline',
    characters: [1, 2, 3, 4, 5],
    equipment: [1, 2, 3],
    games: [ id4 ],
    friends: [1]
  },
  {
    id: 3,
    name: 'Barberto',
    status: 'offline',
    characters: [1, 3],
    equipment: [1, 2, 3, 4],
    games: [],
    friends: [1]
  }
];

export const games = [
  {
    players: [playerId1, playerId2],
    board: boardId,
    turn: playerId
  },
  {
    players: [playerId1, playerId2],
    board: boardId,
    turn: playerId
  },
  {
    players: [playerId1, playerId2],
    board: boardId,
    turn: playerId
  }
];

export const boards = [];

export const characters = [
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

export const initialState = {
  users, games, boards, characters, equipment
};
