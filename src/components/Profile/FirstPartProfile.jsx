import React, { Component, PropTypes } from 'react';
import { Avatar, LinearProgress } from 'material-ui';
import IconButton from 'material-ui/lib/icon-button';
import AvatarPerfil from './AvatarPerfil';
import { Modal, ModalClose } from 'react-modal-bootstrap';
import AvatarList from './AvatarList';


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
            <AvatarPerfil user={user} />
          </IconButton>
        </div>
        <Modal isOpen={isOpen} onRequestHide={ () => this.handleCancelClick() } backdrop keyboard>
          <div className="modal-header">
            <ModalClose onClick={() => this.handleCancelClick()} />
            <h4>CHUS YOR HABATAR</h4>
          </div>
          <div className="modal-body">
            <AvatarList changeAvatar={this.props.changeAvatar} />
            <button className="btn" type="button" onClick={ () => this.handleCancelClick() }>cancel</button>
          </div>
        </Modal>
        <div>
          <p className="profile">level {user.level} </p>
          <LinearProgress id="experienceBar" mode="determinate" value={user.exp} />
        </div>
      </div>
    );
  }
}

FirstPartProfile.propTypes = {
  user: PropTypes.object
};
