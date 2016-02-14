import * as notificationActions from '../actions/Notifications';

function notificationRefresh(state, notification){
  return Object.assign({}, state, notification);
}

export default function notificationReducer(state = {}, action) {
  switch (action.type) {
    case 'NOTIFICATION_REFRESH':
      return notificationRefresh(state, action.notification)
    default:
      return state;
  }
}
