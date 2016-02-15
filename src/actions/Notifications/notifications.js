import { pushState } from 'redux-router';

export const navigate = (path) => pushState(null, path);

function refreshNotifications( notifications ){
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
