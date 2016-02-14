import React, { Component, PropTypes } from 'react';
import NotificationManager from './NotificationManager';

export default class Notifications extends Component {
  render(){
    const { notifications } = this.props;
    return(
      <div>
      {
        Object.keys( notifications ).map(( child, index ) => {
          const notification = notifications[child];
          return <NotificationManager key={ index } notification={notification}/>
        })
      }
      </div>
    );
  }
}

Notifications.propTypes = {
  notifications: PropTypes.object
}
