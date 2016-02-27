import { SEARCH_FRIEND } from '../actions/Profile/action_types';

function setSearch(state, users) {
  return users;
}

export default function searchReducer(state = {}, action) {
  switch (action.type) {
    case SEARCH_FRIEND:
      return setSearch(state, action.users);
    default:
      return state;
    }
}
