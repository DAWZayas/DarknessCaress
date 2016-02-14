import { pushState } from 'redux-router';

import { SIGN_OUT_SUCCESS } from './action_types';

export const navigate = (path) => pushState(null, path);

//LogOut:
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

// Notifications:
export function refreshNotifications( notifications ){
  return {
    type: 'NOTIFICATION_REFRESH',
    notification: notifications
  };
}

export function  notificationListener() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    firebase.child(`users/${userId}/notifications`).on('value', (snapshot) => {
      dispatch( refreshNotifications( snapshot.val() || { } ));
    });
  };
}

export function  notificationListenerKiller() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    firebase.child(`users/${userId}/notifications`).off();
  };
}
