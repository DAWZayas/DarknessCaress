import {expect} from 'chai';

import { createBoard, createTerrain, determineType, iterateTakeSquares, generateSquare,
   takeSquares } from '../src/utils/boardEngine';

describe('Board functions', () => {

  describe('takeSquares', () => {

    it('should generate a random percentage depending on size', () => {
      const number = 5;
      const size = 4;
      const percentage = takeSquares(5, 4);
      expect(percentage).to.above(-1);
      expect(percentage).to.below(number * size / 100);
    });

  });

  describe('generateSquare', () => {

    it('should create a terrain object based on an id and a name', () => {
      const id = 5;
      const name = 'forest';
      const terrainObject = generateSquare(id, name);
      const desiredResult = {
        id: id,
        name: name,
        unit: false,
        interactive: false
      };
      expect(terrainObject).to.eql(desiredResult);
    });

  });

  describe('iterateTakeSquares', () => {

    it('should generate an array of quantities based on an array of percentages and size', () => {
      const percentages = [1, 2, 3];
      const size = 4;
      const quantities = iterateTakeSquares(percentages, size);
      expect(quantities.length).to.equal(percentages.length);
    });

  });

  describe('determineType', () => {

    it('should return an array of percentages based on a number', () => {
      const type = 2;
      const array = determineType(type);
      expect(array.length).to.equal(7);
      expect(array[2]).to.equal(-1);
    });

  });

  describe('createTerrain', () => {

    it('should generate an array of terrain names from two numbers and an array of objects', () => {
      const type = 2;
      const size = 4;
      const terrains = [{ name: 'forest' }, { name: 'forest' }, { name: 'forest' }, { name: 'forest'},
        { name: 'forest' }, { name: 'forest' }, { name: 'forest' }];
      const array = createTerrain(type, size, terrains);
      expect(array.length).to.equal(size * size);
      expect(array[0]).to.be.a('string');
    });

  });

  describe('createBoard', () => {

    it('should generate an 2D array of terrain objects from size and an array of objects', () => {
      const size = 4;
      const terrains = [{ name: 'forest' }, { name: 'forest' }, { name: 'forest' }, { name: 'forest'},
        { name: 'forest' }, { name: 'forest' }, { name: 'forest' }];
      const array = createBoard(size, terrains);
      expect(array.length).to.equal(size);
      expect(array[0].length).to.equal(size);
      expect(array[0][0]).to.be.a('object');
    });

  });

});
