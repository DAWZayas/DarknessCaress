import { randomNumber } from '/home/arceso/WorkSpace/DarknessCaress/src/utils/exports.js';
function getBoardSize(){
  return 16;
}
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
        arrayOfRiverArrays[i][u].goWithTheFlow(randomNumber(3, 1));
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
  pos['x']=randomNumber(getBoardSize(), 0);
  pos['y']=randomNumber(getBoardSize(), 0);
  return pos;
}

function generateId(position){
  return getBoardSize() * position['y'] + position['x'];
}

export function previousRiver(i, u){
  p=i;
  q=u;
  u===0? p-- : q-- ;
  return arrayOfRiverArrays[p][q];
}

export function goWithTheFlow(action){
  if(!outOfTheMap(advance())){
    if(action === 1) foward();
    else if(action === 2) rotate();
    else die();
  }
  else die();
}

export function outOfTheMap (position){
  if (position['x'] >= getBoardSize() && position['y'] >= getBoardSize()) return true;
  else return false;
}

export function advance(){ return this.position[direction]+sense;}

export function foward(){ this.position[direction]=advance();}

export function turn(){ return this.direction==='x'?'y':'x';}
export function rotate(){ foward(); this.direction=turn();}
export function die(){ this.isDead=true;}
//path: function (){ return 'path to the file'(direction === 'x' ? 'nombre del horizontal' : 'nombre del vertical')'.formato' }
//};
export function pathTileUnder(){ return board[this.position['x']][this.position['y']]==='plain'? true:false;}
