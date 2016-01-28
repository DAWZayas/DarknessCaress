import { SET_USER } from '../actions/Nav';

function setUser(state, user) {
  return user;
}

export default function userReducer(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return setUser(state, action.user);
    default:
      return state;
    }
}
