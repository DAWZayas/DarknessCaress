import { randomNumber, randomBool } from './generalFunctions';
import { riverLikeTerrains, boardSize } from './initialState';

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
  let firstRiverObject = {
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

export function cloneRiver(river) {
  let newPosition = {};
  newPosition.x = river.position.x;
  newPosition.y = river.position.y;
  let newId = generateId(newPosition);
  let clonedRiver = {
    name : river.name,
    defense: river.defense,
    avoid: river.avoid,
    movementSlow: river.movementSlow,
    passable: river.passable,
    unit : false,
    interactive : false,
    position : newPosition,
    id : newId,   
    sense : river.sense,
    direction : river.direction,
    isDead : river.isDead,
    hasBridge : false
  };
  return clonedRiver;
}

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
      turn(river);
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

export function turn(riverLike) {
  riverLike.direction = (riverLike.direction === 'x') ? 'y' : 'x';
  return riverLike.direction;
}

export function die(riverLike){ riverLike.isDead = true;}

function setImage(riverLike) {  return '../media/terrains/riverLike/river/'+Like.name+'/'+riverLike.name+(direction === 'x' ? 'x' : 'y')+'.png' ;}
//};
//export function pathTileUnder(){ return board[this.position['x']][this.position['y']] === 'plain' ? true : false;}
