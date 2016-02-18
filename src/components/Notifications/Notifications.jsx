import React, { Component, PropTypes } from 'react';
import NotificationManager from './NotificationManager';

export default class Notifications extends Component {
  componentWillMount() {
    if(this.props.auth.authenticated === false) {
      this.props.navigate('/');
    }
  }

  render(){
    const { notifications, auth } = this.props;
    return(
      <div>
      {
        Object.keys( notifications ).map(( child, index ) => {
          const notification = notifications[child];
          return <NotificationManager key={ index } notificationId={child} notification={notification} {...this.props} />
        })
      }
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.object
}
