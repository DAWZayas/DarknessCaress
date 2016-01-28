import { pushState } from 'redux-router';

import { SIGN_OUT_SUCCESS } from './action_types';

export const navigate = (path) => pushState(null, path);

export function signOut() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.unauth();
    dispatch(pushState(null, '/'));
    dispatch({
      type: SIGN_OUT_SUCCESS
    });
  };
}
