export const initialState = {
  board: [[ {
  id: 0,
  interactive: false,
  terrain: 'forest',
  unit: false
},  {
  id: 1,
  interactive: false,
  terrain: 'mountain',
  unit: false
},  {
  id: 2,
  interactive: false,
  terrain: 'mountain',
  unit: false
},  {
  id: 3,
  interactive: false,
  terrain: 'mountain',
  unit: false
}], [ {
  id: 4,
  interactive: false,
  terrain: 'plains',
  unit: false
},  {
  id: 5,
  interactive: false,
  terrain: 'plains',
  unit: false
},  {
  id: 6,
  interactive: false,
  terrain: 'desert',
  unit: false
},  {
  id: 7,
  interactive: false,
  terrain: 'forest',
  unit: false
}], [ {
  id: 8,
  interactive: false,
  terrain: 'desert',
  unit: false
},  {
  id: 9,
  interactive: false,
  terrain: 'plains',
  unit: false
},  {
  id: 10,
  interactive: false,
  terrain: 'desert',
  unit: false
},  {
  id: 11,
  interactive: false,
  terrain: 'desert',
  unit: false
}], [ {
  id: 12,
  interactive: false,
  terrain: 'forest',
  unit: false
},  {
  id: 13,
  interactive: false,
  terrain: 'forest',
  unit: false
},  {
  id: 14,
  interactive: false,
  terrain: 'plains',
  unit: false
},  {
  id: 15,
  interactive: false,
  terrain: 'mountain',
  unit: false
}]],
  equipment: [ {
  damage: '10',
  durability: '100',
  id: 1,
  name: 'Sword'
},  {
  damage: '12',
  durability: '100',
  id: 2,
  name: 'Axe'
},  {
  damage: '8',
  durability: '100',
  id: 3,
  name: 'Bow'
},  {
  damage: '5',
  durability: '100',
  id: 4,
  name: 'Spell Tome'
}],
  friends: [ {
  id: 1,
  name: 'Carlos',
  status: 'offline'
},  {
  id: 2,
  name: 'Alejandro',
  status: 'offline'
},  {
  id: 3,
  name: 'Barberto',
  status: 'online'
}],
  turn:  {
    active: true,
    selected: -1
  },
  units: [ {
  hp: '100',
  id: 1,
  movement: '5',
  mp: '50',
  type: 'Mage'
},  {
  hp: '80',
  id: 2,
  movement: '4',
  mp: '75',
  type: 'Healer'
},  {
  hp: '150',
  id: 3,
  movement: '4',
  mp: '0',
  type: 'Knight'
},  {
  hp: '120',
  id: 4,
  movement: '6',
  mp: '0',
  type: 'Archer'
},  {
  hp: '80',
  id: 5,
  movement: '7',
  mp: '10',
  type: 'Scout'
}]
};
