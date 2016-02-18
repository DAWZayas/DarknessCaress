import React, { Component, PropTypes } from 'react';

export default class MatchReportNotification extends Component {
  render(){
    const { notification, index } = this.props;
    //NOTE: Change below userId for username.
    const text = "You have recived a game propousal from"+notification.userId;
    return(
      <div>
        <div>
          <p>{text}</p>
        </div>
        <div>
        </div>
      </div>
    );
  }

}

MatchReportNotification.propTypes = {
  notification: PropTypes.object
}
