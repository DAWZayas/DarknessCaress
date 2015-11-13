import {expect} from 'chai';

import { setFriend, setUnit, friends, units, friendsReducer, unitsReducer } from '../src/utils/exports';

describe('Application actions', () => {

	describe('setFriend', () => {

    it('should add a friend to an empty friends state', () => {
    	const friend = {
				name: 'Alberto',
				status: 'offline'
			};
      const nextState = friendsReducer(undefined, setFriend(friend));
      expect(nextState.length).to.equal(1);
      expect(nextState[0].name).to.equal('Alberto');
    });

    it('should add a friend to a non empty friends state', () => {
    	const friend = {
				name: 'Alberto',
				status: 'offline'
			};
      const nextState = friendsReducer(friends, setFriend(friend));
      expect(nextState[nextState.length - 1].name).to.equal('Alberto');
    });

  });

  describe('setUnit', () => {

    it('should add a unit to an empty units state', () => {
      const unit = {
        type: 'Wololo',
        hp: '70',
        mp: '100',
        movement: '4'
      };
      const nextState = unitsReducer(undefined, setUnit(unit));
      expect(nextState.length).to.equal(1);
      expect(nextState[0].type).to.equal('Wololo');
    });

    it('should add a unit to a non empty units state', () => {
      const unit = {
        type: 'Wololo',
        hp: '70',
        mp: '100',
        movement: '4'
      };
      const nextState = unitsReducer(units, setUnit(unit));
      expect(nextState[nextState.length - 1].type).to.equal('Wololo');
    });

  });

});
