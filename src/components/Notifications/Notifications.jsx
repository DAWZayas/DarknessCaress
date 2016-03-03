import React, { Component, PropTypes } from 'react';
import NotificationManager from './NotificationManager';
import { Modal, ModalClose } from 'react-modal-bootstrap';

export default class Notifications extends Component {
  componentWillMount() {
    if(this.props.auth.authenticated === false) {
      this.props.navigate('/');
    }
  }

  render(){
    const { notifications, auth } = this.props;
    const admins = [
      'github:10086900',
      'github:12071956',
      'github:10086845',
      'google:117455282037448467157',
      'google:116649049236657564771',
      'google:115675315024314818796'
    ];
    return admins.indexOf(this.props.auth.id) === -1
        ? (
      <Modal isOpen={true}>
          <div className="modal-body">
            <h4>Stop playing with your phone and pay attention to the presentation!!</h4>
          </div>
        </Modal>) : (
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
