import { SET_FRIEND } from '../actions';

function setFriend(state, friend) {
	/*
  const selection = {
    selected: id
  };
  return Object.assign({}, state, selection);
  */
  return state.slice().concat(friend);
}

export default function friendsReducer(state = [], action) {
	switch (action.type) {
  	case SET_FRIEND:
  		return setFriend(state, action.friend);
  	default:
  		return state;
  }
}
