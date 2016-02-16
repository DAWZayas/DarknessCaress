import { pushState } from 'redux-router';

import { NOTIFICATION_REFRESH } from './action_types';

export const navigate = (path) => pushState(null, path);

export function notificationslisteners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.onAuth(function(authData) {
      if(authData) {
        firebase.child(`users/${authData.uid}/notifications`).on('value', (snapshot) => {
          const notifications = snapshot.val() || {};
          dispatch({
            type: NOTIFICATION_REFRESH,
            notification: notifications
          });
        });
      }else{
        firebase.child(`users/${authData.uid}/notifications`).off();
        dispatch({
          type: NOTIFICATION_REFRESH,
          user: {}
        });
      }
    });
  };
}

export function notificationsUnlisteners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.child(`users/${auth.id}/notifications`).off();
    dispatch({
      type: NOTIFICATION_REFRESH,
      user: {}
    });
  };
}
