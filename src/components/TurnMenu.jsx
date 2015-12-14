import React, { Component, PropTypes } from 'react';

import { images } from '../utils/imageExports';

export default class TurnMenu extends Component {

  constructor(props) {
    super(props);
  }

  handleDeselectButtonClick() {
    const board = this.props.turn;
    this.props.onSelectSquare([-1, -1], board);
  }

  handleRemoveBoard() {

  }

  render() {
    const { turn, boards } = this.props;
    const selectedSquare = (turn.selected[0] === -1 && turn.selected[1] === -1) ? -1 : boards[turn.board][turn.selected[0]][turn.selected[1]];
    return (
      <div>
        {
          (selectedSquare === -1)
          ? ''
          : <div className="alert alert-info boardSubMenu" role="alert">
              <div className="bordered">
                <img src={ images[selectedSquare.image] } alt={ 'terrain selected' } height="48px" width="48px" />
                <span> { selectedSquare.name.slice(0, 1).toUpperCase() + selectedSquare.name.slice(1) }. Defense: { selectedSquare.defense }. Dodge: { selectedSquare.avoid }.</span><br/>
              </div>
              <button className="btn btn-info" type="button" onClick={() => this.handleDeselectButtonClick()}>Deselect Square</button>
            </div>
        }
      </div>
    );
  }
}

TurnMenu.propTypes = {
  turn: PropTypes.object,
  onSelectSquare: PropTypes.func,
  boards: PropTypes.array
};