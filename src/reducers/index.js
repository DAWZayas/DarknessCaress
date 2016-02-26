import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import auth from './auth';
import boards from './boards';
import firebase from './firebase';
import user from './user';
import notifications from './notifications';
import opponents from './opponents';

export default combineReducers({
	auth,
	boards,
  firebase,
  router,
  user,
  notifications,
  opponents
});
