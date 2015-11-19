import { randomNumber, boardSize } from './initialState.js';

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

export function randomBool() { return randomNumber(1, 10) > 5 ? true : false; }

export function riverCreator(rivers, terrainName) {
  let arrayOfRivers = [];
  let u = 0;
  for(let i = 0; i < rivers; i++) {
    arrayOfRivers[i]=[];
    arrayOfRivers[i][0]=firstRiverCreator(terrainName);
    u=1;
    while (! arrayOfRivers[i][u-1].isDead) {
      arrayOfRivers[i][u]=arrayOfRivers[i][u-1];
      goWithTheFlow(arrayOfRivers[i][u]);
      u++;
    } 
  }
  return arrayOfRivers;
}

export function getTerrainIndexByName(name){
  let index = 0;
  for(let i = 0; i < riverLikeTerrains.length; i++){
    if (riverLikeTerrains[i].name === name) index = i;
  }
  return index;
}

export function firstRiverCreator(terrainName) {
  let position = initPos();
  let id = generateId(position);
  let terrainIndex = getTerrainIndexByName(terrainName);
  const firstRiverObject = {
    name : riverLikeTerrains[terrainIndex].name,
    defense: riverLikeTerrains[terrainIndex].defense,
    avoid: riverLikeTerrains[terrainIndex].avoid,
    movementSlow: riverLikeTerrains[terrainIndex].movementSlow,
    passable: riverLikeTerrains[terrainIndex].passable,
    unit : false,
    interactive : false,
    position : position,
    id : id,   
    sense : randomBool() ? 1 : -1,
    direction : randomBool() ? 'x' : 'y',
    isDead : randomBool(),
    hasBridge : false
  };
  return firstRiverObject;
}

export function initPos(){
  let  pos = {};
  pos['x'] = randomNumber(0, boardSize);
  pos['y'] = randomNumber(0, boardSize);
  return pos;
}

export function generateId(position){ return boardSize * position['y'] + position['x']; }

export function previousPosition(i, u){
  let p=i;
  let q=u;
  const boardSize = boardSize;
  if (p === 0 && q === 0) return false;
  else {
    if ( q === 0 ) {
      p--;
      q=boardSize;
    }else q--;
    return [p, q];
  }
}

export function goWithTheFlow(river){
  let action = generateRandomAction();
  if(!outOfTheMap(advance(river))){
    if(action === 1) advance(river);
    else if(action === 2) rotate(river);
    else die(river);
  }else die(river);
}

export function generateRandomAction(){
  let number = randomNumber(0, 10);
  if( number < 6 ) return 1;
  else if( number < 9) return 2;
  else return 3;
}

export function outOfTheMap (position){
  if (position['x'] >= boardSize && position['y'] >= boardSize) {
    if (position['x'] < 0 && position['y'] < 0) 
      return true;
  }
  else return false;
}

export function advance(riverLike) { return riverLike.position[riverLike.direction] + riverLike.sense;}

export function turn(riverLike) { return riverLike.direction === 'x' ? 'y' : 'x';}

export function die(riverLike){ riverLike.isDead = true;}

//path: function (){ return 'path to the file'(direction === 'x' ? 'nombre del horizontal' : 'nombre del vertical')'.formato' }
//};
export function pathTileUnder(){ return board[this.position['x']][this.position['y']] === 'plain' ? true : false;}
