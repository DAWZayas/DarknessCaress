import React, { Component, PropTypes } from 'react';
import GameSolicitationNotification from './GameSolicitationNotification';
import GameSolicitationAcceptedNotification from './GameSolicitationAcceptedNotification';
import ChatMessageNotification from './ChatMessageNotification';
import MatchReportNotification from './MatchReportNotification';

export default class NotificationManager extends Component {
  render(){
    const { notification }=this.props;
    console.log(">>>>>>>>>>> Notification: "+notification.type);
    const notificationComponents = {
      'gameSolicitation': GameSolicitationNotification,
      'gameSolicitationAccepted': GameSolicitationAcceptedNotification,
      'chatMessage': ChatMessageNotification,
      'matchReport': MatchReportNotification
    }
    const  Component = notificationComponents[notification.type] ;
    return(
      <div>
        <GameSolicitationNotification notification={ notification } {...this.props} />
      </div>
    );
  }

}

NotificationManager.propTypes = {
  notification: PropTypes.object
}
