import { expect } from 'chai';

describe('sample test', () => {

  describe('Can I have cake?', () => {

    it('The cake is a lie', () => {
      const cake = false;
      expect(cake).to.equal(false);
    });
  });
});
