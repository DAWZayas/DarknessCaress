import { SET_ALL_HEROES } from '../actions/Nav';

function setAllHeroes(state, heroes){
  return heroes;
}

export default function heroesReducer(state = {}, action) {
  switch (action.type) {
    case SET_ALL_HEROES:
      return setAllHeroes(state, action.heroes);
    default:
      return state;
  }
}
