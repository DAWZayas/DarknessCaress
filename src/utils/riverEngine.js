import { randomNumber, boardSize } from './exports.js';

/*
const riverLikeTerrains = [
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
*/

export function randomBool() { return randomNumber(1, 10) > 5 ? true : false; }

export function riverCreator(rivers) {
  arrayOfRiverArrays=[];
  for(i=0; i<rivers; i++){ 
    arrayOfRiverArrays[i]=[];
    for(u=0; u<rivers; u++) {
      console.log('He llegado.');
      (i===0&&u===0)?arrayOfRiverArrays[i][u]=new firstRiverCreator():arrayOfRiverArrays[i][u]=previousRiver(i, u);
      console.log(arrayOfRiverArrays[i][u]);
      riverBridge=0;
      while(!arrayOfRiverArrays[i][u].isDead) {
        if(arrayOfRiverArrays[i][u].pathTileUnder() || riverBrige===5) {
          arrayOfRiverArrays[i][u].hasBridge=true; 
          riverBridge=0;
        }
        arrayOfRiverArrays[i][u].goWithTheFlow(randomNumber(1, 3));
        riverBridge++;
      }
    }
  }
  return arrayOfRiverArrays;
}
export function firstRiverCreator() {
  let position = initPos();
  let id = generateId(position);
  const firstRiverObject = {
    name : 'river',
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
  let  pos={};
  pos['x']=randomNumber(0, boardSize);
  pos['y']=randomNumber(0, boardSize);
  return pos;
}

export function generateId(position){
  return boardSize * position['y'] + position['x'];
}

export function previousPosition(i, u){
  let p=i;
  let q=u; 
//  let arrayOfPositions=[];
  if (p === 0 && q === 0) return false;
  else {
    if ( q === 0 ) {
      p--;
      q=boardSize;
    }else q--;
    return [p, q];
  }
}

export function goWithTheFlow(action){
  if(!outOfTheMap(advance())){
    if(action === 1) foward();
    else if(action === 2) rotate();
    else die();
  }else die();
}

export function outOfTheMap (position){
  if (position['x'] >= boardSize && position['y'] >= boardSize) return true;
  else return false;
}

export function advance(riverLike) { return riverLike.position[riverLike.direction] + riverLike.sense;}

/*export function foward(riverLike) { riverLike.position[direction] = advance(riverLike);}
*/
export function turn(riverLike) { return riverLike.direction === 'x' ? 'y' : 'x';}

/*export function rotate(riverLike) { 
  foward(riverLike); 
  riverLike.direction=turn(riverLike);
}*/

export function die(riverLike){ riverLike.isDead = true;}

//path: function (){ return 'path to the file'(direction === 'x' ? 'nombre del horizontal' : 'nombre del vertical')'.formato' }
//};
export function pathTileUnder(){ return board[this.position['x']][this.position['y']] === 'plain' ? true : false;}
