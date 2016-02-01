import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import auth from './auth';
import boards from './boards';
import firebase from './firebase';
import user from './user';

export default combineReducers({
	auth,
	boards,
  firebase,
  router,
  user,
});
