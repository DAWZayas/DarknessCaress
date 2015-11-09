import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import units from './units';
import board from './board';
import equipment from './equipment';
import friends from './friends';

export default combineReducers({
	units,
	board,
	equipment,
	friends,
  router
});
