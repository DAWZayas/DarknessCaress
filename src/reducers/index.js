import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import auth from './auth';
import boards from './boards';
import firebase from './firebase';
import user from './user';
import notifications from './notifications';
import heroes from './heroes';

export default combineReducers({
	auth,
	boards,
  firebase,
  router,
  user,
  notifications,
	heroes,
});
