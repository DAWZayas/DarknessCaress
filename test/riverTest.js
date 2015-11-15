import {expect} from 'chai';
import {firstRiverCreator}from '/home/arceso/a.js';
describe('River functions', () => {
  describe('First river creator:', () => {
    const river1 = firstRiverCreator();
    const river2 = firstRiverCreator();
    it('Should assign propperly the object to a const', () => {

      expect (river1).to.not.be.undefined;
    });
    it('Should create the object with propper values types', () => {  
      expect (river1.name).to.be.a('string');
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
});
