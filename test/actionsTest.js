import {expect} from 'chai';

import { setFriend } from '../src/actions';
import friendsReducer from '../src/reducers/friends';
import { friends } from '../src/utils/initialState';

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

});
