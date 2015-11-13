import {expect} from 'chai';

import { setFriend, setUnit, setEquipment, selectSquare, friends, units, equipment, turn } from '../src/utils/exports';
import friendsReducer from '../src/reducers/friends';
import unitsReducer from '../src/reducers/units';
import equipmentReducer from '../src/reducers/equipment';
import turnReducer from '../src/reducers/turn';

describe('Application actions', () => {

	describe('setFriend', () => {

    it('should add a friend to an empty friends state', () => {
    	const friend = {
				name: 'Alberto',
				status: 'offline'
			};
      const nextState = friendsReducer(undefined, setFriend(friend));
      expect(nextState.length).to.equal(1);
      expect(nextState[0]).to.equal(friend);
    });

    it('should add a friend to a non empty friends state', () => {
    	const friend = {
				name: 'Alberto',
				status: 'offline'
			};
      const nextState = friendsReducer(friends, setFriend(friend));
      expect(nextState.length).to.equal(friends.length + 1);
      expect(nextState[friends.length]).to.equal(friend);
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
      expect(nextState[0]).to.equal(unit);
    });

    it('should add a unit to a non empty units state', () => {
      const unit = {
        type: 'Wololo',
        hp: '70',
        mp: '100',
        movement: '4'
      };
      const nextState = unitsReducer(units, setUnit(unit));
      expect(nextState.length).to.equal(units.length + 1);
      expect(nextState[units.length]).to.equal(unit);
    });

  });

  describe('setEquipment', () => {

    it('should add an item to an empty equipment state', () => {
      const item = {
        name: 'Stick',
        damage: '70',
        durability: '100'
      };
      const nextState = equipmentReducer(undefined, setEquipment(item));
      expect(nextState.length).to.equal(1);
      expect(nextState[0]).to.equal(item);
    });

    it('should add an item to an non empty equipment state', () => {
      const item = {
        name: 'Stick',
        damage: '70',
        durability: '100'
      };
      const nextState = equipmentReducer(equipment, setEquipment(item));
      expect(nextState.length).to.equal(equipment.length + 1);
      expect(nextState[equipment.length]).to.equal(item);
    });

  });

  describe('selectSquare', () => {

    it('should change from no selected square to a selected square', () => {
      const square = {
        id: 2,
        terrain: 'forest'
      };
      const nextState = turnReducer(undefined, selectSquare(square.id));
      expect(nextState.selected).to.not.equal(-1);
      expect(nextState.selected).to.equal(square.id);
    });

    it('should change which square is selected', () => {
      const square = {
        id: 2,
        terrain: 'forest'
      };
      const nextState = turnReducer(turn, selectSquare(square.id));
      expect(nextState.selected).to.not.equal(turn.id);
      expect(nextState.selected).to.equal(square.id);
    });

  });

});
