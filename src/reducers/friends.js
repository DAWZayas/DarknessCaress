import { SET_FRIEND } from '../actions';

function setFriend(state, friend) {
  return state.slice().concat(friend);
}

export function friendsReducer(state = [], action) {
	switch (action.type) {
  	case SET_FRIEND:
  		return setFriend(state, action.friend);
  	default:
  		return state;
  }
}
