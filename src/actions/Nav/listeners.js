import { pushState } from 'redux-router';

import { SET_USER, NOTIFICATION_REFRESH } from './action_types';

export const navigate = (path) => pushState(null, path);

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.onAuth(function(authData) {
      if(authData) {
        console.log("Authenticated with uid:", authData.uid);
        const ref = firebase.child(`users/${authData.uid}`);
        ref.on('value', snapshot => {
          dispatch({
            type: SET_USER,
            user: snapshot.val()
          });
        });
      }else{
        console.log("Client unauthenticated.");
        const ref = firebase.child('users');
        ref.off();
        dispatch({
          type: SET_USER,
          user: {}
        });
      }
    });
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('users');
    ref.off();
    dispatch({
      type: SET_USER,
      user: {}
    });
  };
}

// Notifications:
export function notificationListener() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.onAuth(function(authData) {
      if(authData) {
        firebase.child(`users/${authData.uid}/notifications`).on('value', snapshot => {
          const notifications = snapshot.val() || {};
          dispatch({
            type: NOTIFICATION_REFRESH,
            notification: notifications
          });
        });
      }else{
        firebase.child('users').off();
        dispatch({
          type: NOTIFICATION_REFRESH,
          notification: {}
        });
      }
    });
  };
}

export function notificationUnlistener() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child('users').off();
    dispatch({
      type: NOTIFICATION_REFRESH,
      notification: {}
    });
  };
}
