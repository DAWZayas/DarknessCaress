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
          ? <div className="alert alert-info boardSubMenu" role="alert">Select a square of the map<button onClick={() => this.handleRemoveBoard()} className="btn btn-alert pull-right"><span className="glyphicon glyphicon-trash"></span></button></div>
          : <div className="alert alert-info boardSubMenu" role="alert">
              <img src={ images[selectedSquare.image] } alt={ 'terrain selected' } height="48px" width="48px" />
              <span> { selectedSquare.name }. Position: row { turn.selected[0] + 1}, column { turn.selected[1] + 1}.</span><br/>
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