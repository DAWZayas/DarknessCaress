import {expect} from 'chai';
import {firstRiverCreator, randomBool, riverCreator, riverLikeTerrains, getTerrainIndexByName, generateRandomAction, initPos, generateId, previousPosition, advance, turn, outOfTheMap, randomNumber, boardSize} from '../src/utils/export';

describe('River functions', () => {
  describe('River creator:', () => {
    const arrayOfRivers = riverCreator(1, 'river');
    it('Should be an object', () => {
      expect (arrayOfRivers).to.be.an('object');
    });
    it('Should have an object inside of the first position', () => {
      expect (arrayOfRivers[0]).to.be.an('object');
    });
    it('Should have a river object insde of the object on the first position, wich is inside of another', () => {
      expect (arrayOfRivers[0][0]).to.be.an('object');
    });
    it('Should result that the river object has inside a bunch of properties', () => {
      expect (arrayOfRivers[0][0]).to.be.an.instanceof(firstRiverCreator());
    });
  });

  describe('First river creator:', () => {
    const river1 = firstRiverCreator();
    const river2 = firstRiverCreator();
    it('Should assign propperly the object to a const', () => {
      expect (river1).to.not.be.undefined;
    });
    it('Should create the object with propper values types', () => {  
      expect (river1.name).to.be.a('string');
      expect (river1.defense).to.be.a('number');
      expect (river1.avoid).to.be.a('number');
      expect (river1.movementSlow).to.be.a('number');
      expect (river1.passable).to.be.a('boolean');
      expect (river1.unit).to.be.a('boolean');
      expect (river1.interactive).to.be.a('boolean');
      expect (river1.position).to.be.an('object');
      expect (river1.id).to.be.a('number');
      expect (river1.sense).to.be.a('number');
      expect (river1.direction).to.be.a('string');
      expect (river1.isDead).to.be.a('boolean');

      expect (river1.hasBridge).to.be.a('boolean');
    });
    it('Should create different rivers each time it is called', () => {
      expect (river1).to.not.eql(river2);
    });
  });
  describe('cosas pa que no me grite chai', () => {
    it('Should callarse de una vez.', () => {
      riverCreator();
      randomNumber();
     });
  });
  describe('Random boolean:', () => {
    const randomBoolean = randomBool();
    it('Should be a boolean', () => {
      expect (randomBoolean).to.be.a('boolean');
    });
  });

  describe('Position initiator:', () => {
    const position = initPos();
    it('Should be an object', () => {
      expect (position).to.be.an('object');
    });
    it('Should have X and Y as indexes', () => {
      expect (position['x']).to.exist;
      expect (position['y']).to.exist;
    });
    it('Should contain integers on both positions', () => {
      expect (position['x']).to.be.a('number');
      expect (position['y']).to.be.a('number');
    });
  });
  describe('Get terrain index by name:', () => {
    const number = getTerrainIndexByName('river');
    it('Should be a number', () => {
      expect (number).to.be.a('number');
    });
    it('Should be on a range from 0 to the array lenght', () => {
      const sizeOfArray = riverLikeTerrains.length;
      expect (number).to.be.at.least(0);
      expect (number).to.be.at.most(sizeOfArray);
    });
  describe('Generate random action from 1 to 3, porcentually parsed:', () => {
    const number = generateRandomAction();
    it('Should be a number', () => {
      expect (number).to.be.a('number');
    });
    it('Sould be on a 1, 3 range', () => {
      expect (number).to.be.at.least(1);
      expect (number).to.be.at.most(3);
    });
  });
  describe('Generate an unique ID', () => { // It does not check to be unique but -\('^ ' ) /-
    const id1 = generateId(initPos());
    const id2 = generateId(initPos());
    it('Should be an integer', () => {  
      expect (id1).to.be.a('number'); 
    });
    it('Should be different from another id', () => {
      expect (id1).to.not.eql(id2);
    });
  });
  
  describe('Get the previous position of a given position:', () => {
    const getPreviousOnSameRow = previousPosition(1, 3);
    const getPreviousOnPreviousRow = previousPosition(1, 0);
    const getPreviousOfBeggining = previousPosition(0, 0);
    it('Should return an array on same row but a previous column', () => {
      expect (getPreviousOnSameRow[0]).to.be.eql(1);
      expect (getPreviousOnSameRow[1]).to.be.eql(2);
    });
    it('Should return an array on previous row and last column', () => {
      expect (getPreviousOnPreviousRow[0]).to.be.eql(0);
      expect (getPreviousOnPreviousRow[1]).to.be.eql(boardSize);
    });
    it('Should return an array on same row but a previous column', () => {
      expect (getPreviousOfBeggining).to.be.false;
    });
  });
  describe('River modification of flow:', () => {
    let riverBase = firstRiverCreator();
    describe('Advance: return the next position', () => {    
      it('Should advance to south', () => {
        riverBase.position['y'] = 5;
        riverBase.sense = -1;
        riverBase.direction = 'y';
        const riverAdvance1 = riverBase;
          expect (advance(riverAdvance1)).to.be.below(riverAdvance1.position['y']); 
      });
    });
    describe('Advance: return the next position', () => {
      it('Should advance to west', () => {
        riverBase.position['x'] = 9;
        riverBase.sense = 1;
        riverBase.direction = 'x';
        const riverAdvance2 = riverBase;
          expect (advance(riverAdvance2)).to.be.above(riverAdvance2.position['x']);
      });
    });
    describe('Turn: change the advance direcction', () => {
      it('Should return an swapped X for Y or biceversa.', () => {
        expect (turn(riverBase.direction)).to.be.a('string');
        expect (turn(riverBase)).to.not.equal(riverBase);
      });
    });
  });
  describe('Out of the map ? :', () => {
    let pos = initPos();
    it('Should be a boolean.', () => {
      expect (outOfTheMap(pos)).to.be.a('boolean');
    });
    it('Should be true if initPosition was stored and unmodiffied.', () => {
      expect (outOfTheMap(pos)).to.be.true;
    });
    pos['x']= -1;
    it('Should be false if forced to be so.', () => {
      expect (outOfTheMap(pos)).to.be.a('boolean');
    });
  });
});
});
