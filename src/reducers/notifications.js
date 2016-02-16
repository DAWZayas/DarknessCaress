import { NOTIFICATION_REFRESH } from '../actions/Notifications/action_types';

function notificationRefresh(state, notification){
  return notification;
}

export default function notificationReducer(state = {}, action) {
  switch (action.type) {
    case NOTIFICATION_REFRESH:
      return notificationRefresh(state, action.notification)
    default:
      return state;
  }
}
