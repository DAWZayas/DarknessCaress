import React, { Component, PropTypes } from 'react';
import GameSolicitationNotification from './GameSolicitationNotification';
import ChatMessageNotification from './ChatMessageNotification';
import MatchReportNotification from './MatchReportNotification';

export default class NotificationManager extends Component {
  render(){
    const { notification }=this.props;
    const notificationComponents = {
      'gameSolicitation': GameSolicitationNotification,
      'chatMessage': ChatMessageNotification,
      'matchReport': MatchReportNotification
    }
    const  Component = notificationComponents[notification.type] ;
    return(
      <div>
        <Component notification={ notification } {...this.props} />
      </div>
    );
  }

}

NotificationManager.propTypes = {
  notification: PropTypes.object
}
