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
let terrainComplete = [];
function randomNumber(max, min){ return Math.round(Math.random() * max) + min; }
function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
}
function getBoardSize(){ return 4;}
function createBoard() {
  size=getBoardSize();
  let idSquare = 0;
  let _board = [];
  generateTerrain(randomNumber(3, 0));
  shuffle(terrainComplete);
  for (let i = 0; i < size; i++) {
    _board[i] = [];
    for (let j = 0; j < size; j++) {
      _board[i][j] = generateSquare(idSquare++); 
      
    };
  };
  return _board.slice();
}
function generateTerrain(type){terrainComplete=createTerrain(type);}
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
function createTerrain(type){
  let terrain = multiplierTerrain(iterateTakeSquares(determineType(takeType(type))));
  let terrainObjets = [];
  let count = 0;
  for (let i = 0; i < terrain.length; i++) {
    for (let j = 0; j < terrain[i]; j++) {
      terrainObjets[count]=terrains[i].name;
      count++;
    };
  };
  return terrainObjets;
}
function determineType(type){
  if (type==='Plains') terrain = [(-1), 30, 40, 30, 30, 30, 25];
  else if(type==='Forest') terrain = [40, (-1), 30, 30, 30, 30, 25];
  else if(type==='Desert') terrain = [40, 30, (-1), 30, 30, 30, 25];
  else terrain = [40, 30, 30, (-1), 30, 30, 25]; //nieve!!
  return terrain; 
}
function iterateTakeSquares(terrain){
  let terrainBase = 0;
  let terrainBasePosition = 0;
  for (let i = 0; i < terrain.length; i++) {
    if(terrain[i]!==-1){
    terrain[i] = takeSquares(terrain[i]);
    terrainBase+=terrain[i];
    }else terrainBasePosition=i;
  };
  terrain[terrainBasePosition] = getBoardSize()-terrainBase;
  return terrain;
}
function multiplierTerrain(terrain){
  for (let i = 0; i < terrain.length; i++){
    terrain[i]=terrain[i]*getBoardSize();
  };
  return terrain;
}
function takeSquares(percent){return Math.floor((randomNumber(percent, 0))*getBoardSize()/100);}

//!\\ Begins: Arceso's code piece: unestable shit.
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
function randomBool(){return randomNumber(10, 1)>5?true:false;}
function riverCreator(rivers)
{
  arrayOfRiverArrays=[];
  for(i=0;i<rivers;i++)
  { 
    arrayOfRiverArray[i]=[];
    for(u=0;u<rivers;u++)
    {
      arrayOfRiverArrays[i][u]=river.initRiver();
      riverBridge=0;
      while(!arrayOfRiverArrays[i][u].isDead)
      {
        if(arrayOfRiverArrays[i][u].pathTileUnder() || riverBrige===5)
        {
          arrayOfRiverArrays[i][u].hasBridge=true; 
          riverBridge=0;
        }
        arrayOfRiverArrays[i][u].goWithTheFlow(randomNumber(3,1));
        riverBridge++;
      }
    }
  }
  return arrayOfRiverArrays;
}

river={
  id: getBoardSize()*y+x,
  name: 'river',
  unit: false,
  interactive: false,
  position:{},
  sense:1,
  direction:'x',
  isDead:false,
  hasBridge:false,
  
  initRiver: function ()
  {
    this.position['x']=randomNumber(getBoardSize(),0);
    this.position['y']=randomNumber(getBoardSize(),0);
    this.sense = randomBool() ? 1 : -1;
    this.direction = randomBool() ? 'x' : 'y';  
  },

  goWithTheFlow: function(action)
  {
    if(!outOfTheMap(advance()))
    {
      if(action === 1) foward();
      else if(action === 2) rotate();
      else die();
    }else die();
  },
           
  outOfTheMap: function(position)
  {
    if (position[x] >= getBoardSize() && position[y] >= getBoardSize()) return true;
    else return false;
  },
      
  advance: function(){ return this.position[direction]+sense;},
        
  foward: function(){ this.position[direction]=advance();},
  
  turn: function(){ return this.direction==='x'?'y':'x';},

  rotate: function(){ foward(); this.direction=turn();},

  die: function(){ this.isDead=true;},

  path: function (){ return 'path to the file'(direction === 'x' ? 'nombre del horizontal' : 'nombre del vertical')'.formato' }

};

  pathTileUnder: function(){ return board[this.position['x']][this.position['y']].terrain.name=='plain'? true:false;}
};

//######################## PATTERN SECCION #################################

function patternCreator(terrainArray)
{
  terrainArray[i].position['x']=randomNumber(getBoardSize(), 0);
  terrainArray[i].position['y']=randomNumber(getBoardSize(), 0);
  for(i=1;i<terrainArray.lenght();i++)
  {
    do
    {
      willXUpdate=randomBool();
      willYUpdate=randomBool();
    }while (( willXUpdate && willYUpdate ) === 0);
    
    do
    {
      xUpdate=terrainArray[i-1].position['x'] + (randomBool() ? 1 : -1);
      yUpdate=terrainArray[i-1].position['x'] + (randomBool() ? 1 : -1);
    }while ( (isOutOfTheBoard(xUpdate) && isOutOfTheBoard(yUpdate)) !== true);

    if( willXUpdate === true ) terrainArray[i].position['x'] = xUpdate;
    if( willYUpdate === true ) terrainArray[i].position['y'] = yUpdate;
  }

  function isThisPositionUsed(positionX, positionY)
  {
    positionUsed=false;
    for(u=0;u<terrainArray.lenght();u++)
    {
     if ( terrainArray[u].position['x'] === positionX && terrainArray[u].position['y'] === positionY) positionUsed=true;
    }
    return positionUsed;
  }
}

//!\\ END: Arceso's code piece.
*/

const board = createBoard();

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

export const initialState = {
  units, equipment, board, friends, turn
};

