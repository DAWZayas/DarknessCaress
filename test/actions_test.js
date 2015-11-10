import {List, Map} from 'immutable';
import {expect} from 'chai';
import {setFriend} from '../src/actions';

describe('application logic', () => {

  describe('setFriend', () => {

  	it('adds the first friend to the state', () => {
      const state = Map();
      const friend = {
				name: 'Alberto',
				status: 'offline'
			};
      const nextState = setFriend(state, friend);
      expect(nextState).to.equal(Map({
        friends: List.of({
        	id: 1,
					name: 'Alberto',
					status: 'offline'
				})
      }));
    });

    it('adds a new friend to the state', () => {
      const state = Map({
        friends: List.of({
        	id: 1,
					name: 'Carlos',
					status: 'online'
				})
			});
      const friend = {
				name: 'Alberto',
				status: 'offline'
			};
      const nextState = setFriend(state, friend);
      expect(nextState).to.equal(Map({
        friends: List.of({
        	id: 1,
					name: 'Carlos',
					status: 'online'
				},
				{
					id: 2,
					name: 'Alberto',
					status: 'offline'
				})
      }));
    });

 	});
});
