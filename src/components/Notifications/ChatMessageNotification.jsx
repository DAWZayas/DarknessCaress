import React, { Component, PropTypes } from 'react';

export default class ChatMessageNotification extends Component {
  render(){
    const { notification, index } = this.props;
    //NOTE: Change below userId for username.
    const headText = "You have recived a message from"+notification.userId+":";
    const message = notification.message;
    return(
      <div>
        <div>
          <p>{headText}</p>
          <p>{message}</p>
        </div>
        <div>
        </div>
      </div>
    );
  }

}

ChatMessageNotification.propTypes = {
  notification: PropTypes.object
}
