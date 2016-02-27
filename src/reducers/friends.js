import { SET_FRIENDS } from '../actions/Profile/action_types';

function setFriends(state, friends) {
  return friends;
}

export default function searchReducer(state = [], action) {
  switch (action.type) {
    case SET_FRIENDS:
      return setFriends(state, action.friends);
    default:
      return state;
    }
}
