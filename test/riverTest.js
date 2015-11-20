import {expect} from 'chai';
import { firstRiverCreator, riverCreator, riverLikeTerrains, 
        getTerrainIndexByName, generateRandomAction, initPos, generateId,
        advance, outOfTheMap, previousPosition, boardSize } from '../src/utils/exports';
import { turn } from '../src/utils/riverEngine';

describe('River functions', () => {

  describe('River creator:', () => {
    const arrayOfRivers = riverCreator(1, 'river');
    it('Should be an object', () => {
      expect (arrayOfRivers).to.be.an('array');
    });
    it('Should have an array inside of the first position (its a matrix)', () => {
      expect (arrayOfRivers[0]).to.be.an('array');
    });
    it('Should have a river object inside each position of the matrix', () => {
      expect (arrayOfRivers[0][0]).to.be.an('object');
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
    it('Should be on a range from 0 to the array length', () => {
      const sizeOfArray = riverLikeTerrains.length;
      expect (number).to.be.at.least(0);
      expect (number).to.be.at.most(sizeOfArray);
    });
  });

  describe('Generate random action from 1 to 3, percentually parsed:', () => {
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
    it('Should be false if initPosition was stored and unmodiffied.', () => {
      expect (outOfTheMap(pos)).to.be.false;
    });
    it('Should be true if forced to be so.', () => {
      pos['x']= -1;
      expect (outOfTheMap(pos)).to.be.true;
    });
  });

});
