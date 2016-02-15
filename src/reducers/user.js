import { SET_USER } from '../actions/Nav';
import { SET_AVATAR } from '../actions/Profile';

function setUser(state, user) {
  return user;
}
export function setAvatar(state, avatarName){
  const avatar = {avatar: avatarName};
  return Object.assign({}, state, avatar);
}

export default function userReducer(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return setUser(state, action.user);
    case SET_AVATAR:
        return setAvatar(state, action.avatar);
    default:
      return state;
    }
}
