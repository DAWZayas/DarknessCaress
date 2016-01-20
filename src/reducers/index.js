import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import boards from './boards';
import firebase from './firebase';

export default combineReducers({
	boards,
  firebase,
  router
});
