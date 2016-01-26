import React, { Component, PropTypes } from 'react';

import { images } from '../../utils/imageExports';

export default class BoardMenu extends Component {

  constructor(props) {
    super(props);
  }

  handleDeselect() {
    this.props.deSelectSquare();
  }

  handleMove() {
    this.props.turn === 'moving'
      ? this.props.selectSquare(this.props.selectedSquare)
      : this.props.selectMove();
  }

  handleAttack() {
    this.props.turn === 'attacking'
      ? this.props.deSelectAttack()
      : this.props.selectAttack();
  }

  handleDefend() {
    this.props.endMove();
  }

  render() {
    const { board, selectedSquare, selectedUnit, turn, movedSquare } = this.props;
    const highlightedPosition = movedSquare[0] != -1 ? movedSquare
      : selectedSquare[0] === -1 ? -1 : selectedSquare;
    const highlightedSquare = highlightedPosition === -1 ? -1 : board[highlightedPosition[0]][highlightedPosition[1]];
    return (
      <div>
      {
        highlightedSquare === -1 ? <span>Es tu turno</span> :
        <div>
          <div>
            <img src={ images[highlightedSquare.image] } alt={ 'terrain selected' } height="48px" width="48px" />
            <span> { highlightedSquare.name.slice(0, 1).toUpperCase() + highlightedSquare.name.slice(1) }. Defense: { highlightedSquare.defense }. Dodge: { highlightedSquare.avoid }. X: { highlightedPosition[0] }. Y: { highlightedPosition[1] }.</span><br/>
          </div>
          {
            selectedUnit === null ? null :
            <div>
              <span> { selectedUnit.name }. Movement: { selectedUnit.movement }.</span><br/>
              <button className="btn btn-info" type="button" onClick={() => this.handleMove()}>{turn === 'moving' ? 'Stay' : turn === 'moved' || turn === 'attacking' ? 'Return' : 'Move'}</button>
              <button className="btn btn-info" type="button" onClick={() => this.handleAttack()}>{turn === 'attacking' ? 'Cancel' : 'Attack'}</button>
              <button className="btn btn-info" type="button" onClick={() => this.handleDefend()}>Defend</button>
            </div>
          }
          <button className="btn btn-info" type="button" onClick={() => this.handleDeselect()}>x</button>
        </div>
      }
      </div>
    );
  }

}

BoardMenu.propTypes = {
  board: PropTypes.array.isRequired,
  movedSquare: PropTypes.array,
  selectSquare: PropTypes.func,
  deSelectSquare: PropTypes.func,
  selectedSquare: PropTypes.array,
  selectedUnit: PropTypes.object,
  selectMove: PropTypes.func,
  selectAttack: PropTypes.func,
  deSelectAttack: PropTypes.func,
  endMove: PropTypes.func,
  turn: PropTypes.string
};
