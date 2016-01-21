export const terrains = [ 
{
  id: 0,
  name: 'plains',
  defense: 1,
  avoid: 0,
  movementSlow: 2,
  passable: true,
  image: 'plains'
},
{
  id: 1,
  name: 'forest',
  defense: 2,
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
  image: 'desert'
},
{
  id: 3,
  name: 'snow',
  defense: 0,
  avoid: 1,
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
  id: 5,
  name: 'building',
  defense: 3,
  avoid: 2,
  movementSlow: 1,
  passable: true,
  image: 'building'
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
