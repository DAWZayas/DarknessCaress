import { SET_USER } from '../actions/Nav';
import { SET_AVATAR } from '../actions/Profile';
import { SET_HEROES } from '../actions/Profile';
import { BUY_HEROE } from '../actions/Profile';

function setUser(state, user) {
  return user;
}
export function setAvatar(state, avatarName){
  const avatar = {avatar: avatarName};
  return Object.assign({}, state, avatar);
}
export function buyHeroe(state, hero){
  const myHero = {heroes: hero};
  return Object.assign({}, state, myHero);
}


export default function userReducer(state = null, action) {
  switch (action.type) {
    case SET_USER:
      return setUser(state, action.user);
    case SET_AVATAR:
        return setAvatar(state, action.avatar);
    case SET_HEROES:
        return setHeroes(state, action.heroes);
    case BUY_HEROE:
        return buyHeroe(state, action.hero);
    default:
      return state;
    }
}
