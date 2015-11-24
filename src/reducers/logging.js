import { CHANGE_LOGGING } from '../actions';

function changeLogging(state) {
  return state ? false : true;
}

export default function loggingReducer(state = true, action) {
	switch (action.type) {
  	case CHANGE_LOGGING:
  		return changeLogging(state);
  	default:
  		return state;
  }
}
