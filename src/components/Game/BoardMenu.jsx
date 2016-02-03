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
    this.props.boardObject.overlayObject.phase === 'moving'
      ? this.props.selectSquare(this.props.selectedSquare)
      : this.props.selectMove();
  }

  handleAttack() {
    this.props.boardObject.overlayObject.phase === 'attacking'
      ? this.props.deSelectAttack()
      : this.props.selectAttack();
  }

  handleDefend() {
    this.props.endMove();
  }

  render() {
    const { selectedSquare, selectedUnit, phase, movedSquare } = this.props.boardObject.overlayObject;
    const { board } = this.props;
    const highlightedPosition = movedSquare[0] != -1 ? movedSquare
      : selectedSquare[0] === -1 ? -1 : selectedSquare;
    const highlightedSquare = highlightedPosition === -1 ? -1 : board[highlightedPosition[0]][highlightedPosition[1]];
    const turnTitle = this.props.boardObject.turn != this.props.userId ? 'Enemy Turn... aqui el username' : 'Es tu turno';
    return (
      <div>
      {
        highlightedSquare === -1 ? <span>{turnTitle}</span> :
        <div>
          <div>
            <img src={ images[highlightedSquare.image] } alt={ 'terrain selected' } height="48px" width="48px" />
            <span> { highlightedSquare.name.slice(0, 1).toUpperCase() + highlightedSquare.name.slice(1) }. Defense: { highlightedSquare.defense }. Dodge: { highlightedSquare.avoid }. X: { highlightedPosition[0] }. Y: { highlightedPosition[1] }.</span><br/>
          </div>
          {
            selectedUnit === null ? null :
            <div>
              <span> { selectedUnit.name }. Movement: { selectedUnit.movement }.</span><br/>
              {
                this.props.boardObject.turn !== this.props.userId || selectedUnit.active === false || this.props.boardObject[`${selectedUnit.army}`] !== this.props.userId ? null :
                <div>
                  <button className="btn btn-info" type="button" onClick={() => this.handleMove()}>{phase === 'moving' ? 'Stay' : phase === 'moved' || phase === 'attacking' ? 'Return' : 'Move'}</button>
                  <button className="btn btn-info" type="button" onClick={() => this.handleAttack()}>{phase === 'attacking' ? 'Cancel' : 'Attack'}</button>
                  <button className="btn btn-info" type="button" onClick={() => this.handleDefend()}>Defend</button>
                </div>
              }
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
  endMove: PropTypes.func
};
