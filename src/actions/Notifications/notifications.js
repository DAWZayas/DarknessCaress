function refreshNotifications( notifications ){
  return {
    type: 'NOTIFICATION_REFRESH',
    notification: notifications
  };
}

export function  notificationListener() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const userId = "google:117455282037448467157";
    firebase.child(`users/${userId}/notifications`).on('value', (snapshot) => {
      dispatch( refreshNotifications( snapshot.val() || { } ));
    });
  };
}
