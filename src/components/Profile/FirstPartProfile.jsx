import React, { Component, PropTypes } from 'react';
import { Avatar, LinearProgress } from 'material-ui';
import IconButton from 'material-ui/lib/icon-button';
import { Modal, ModalClose } from 'react-modal-bootstrap';
import AvatarList from './AvatarList';

import { images } from '../../utils/imageProfileExports';

export default class FirstPartProfile extends Component {
    constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleCancelClick() {
    this.setState({ isOpen: false });
  }
  handleOpenClick() {
    this.setState({isOpen: true})
  }

  render() {
    const { isOpen } = this.state;
    const { user } = this.props;
    return (
      <div>
        <div className="overlap">
          <IconButton onFocus={() => this.handleOpenClick()} >
              <Avatar id="avatarHolder" src={ images[user.avatar] } size={82} />
          </IconButton>
        </div>
        <Modal isOpen={isOpen} onRequestHide={ () => this.handleCancelClick() } backdrop keyboard>
          <div className="modal-header">
            <ModalClose onClick={() => this.handleCancelClick()} />
            <h4>Choose your Avatar</h4>
          </div>
          <div className="modal-body">
            <AvatarList isOpen={() => this.handleCancelClick()} changeAvatar={this.props.changeAvatar} />
            <div className="buttonOfModal">
              <button className="btn" type="button" onClick={ () => this.handleCancelClick() }>cancel</button>
            </div>
          </div>
        </Modal>
        <div className="exp">
          <LinearProgress id="experienceBar" mode="determinate" value={user.exp} />
        </div>
      </div>
    );
  }
}

FirstPartProfile.propTypes = {
  user: PropTypes.object
};
