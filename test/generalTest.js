import {expect} from 'chai';

import { randomNumber, shuffle, randomBool } from '../src/utils/exports';

describe('General functions', () => {

	describe('shuffle', () => {

    it('should shuffle entries of an array', () => {
    	const array = [1, 2, 3, 4, 5];
      const shuffledArray = shuffle(array);
      expect(shuffledArray.length).to.equal(array.length);
      expect(shuffledArray).to.not.eql(array);
    });

  });

  describe('randomNumber', () => {

    it('should generate a random number', () => {
      const number = randomNumber(1, 4);
      expect(number).to.above(0);
      expect(number).to.below(5);
    });

  });

  describe('RandomBool:', () => {

    it('should generate a random boolean', () => {
      const randomBoolean = randomBool();
      expect (randomBoolean).to.be.a('boolean');
    });

  });

});
