import React, { Component, PropTypes } from 'react';
import { Modal, ModalClose } from 'react-modal-bootstrap';

export default class EndGameModal extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: true };
  }

  handleCancelClick() {
    this.setState({ isOpen: false });
    this.props.eraseBoardFromRedux(this.props.boardId);
    this.props.eraseBoardFromFirebase(this.props.userId, this.props.boardId);
  }

  render() {
    const { isOpen } = this.state;
    const { userId, winner } = this.props;
    return (
      <Modal isOpen={isOpen} onRequestHide={ () => this.handleCancelClick() } backdrop keyboard>
        <div className="modal-header">
          <ModalClose onClick={() => this.handleCancelClick()} />
          { userId === winner ? <h4>You Won!</h4> : <h4>You lost Mofo!</h4> }
        </div>
        <div className="modal-body">
          <button className="btn" type="button" onClick={ () => this.handleCancelClick() }>OK</button>
        </div>
      </Modal>
    );
  }

}

EndGameModal.propTypes = {
  userId: PropTypes.string,
  winner: PropTypes.string
};
