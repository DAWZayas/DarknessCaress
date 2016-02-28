import React, { Component, PropTypes } from 'react';

import { images } from '../../utils/imageExports';
import { heroes } from '../../utils/heroesExports';

export default class BoardMenu extends Component {

  constructor(props) {
    super(props);
  }

  handleDeselect() {
    this.props.deSelectSquare();
  }

  handleMove() {
    this.props.boardObject.overlayObject.phase === 'moving'
      ? this.props.selectSquare(this.props.boardObject.overlayObject.selectedSquare)
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

  rangeToString(range) {
    let stringifyRange = '';
    range.map(partialRange => {
      stringifyRange += partialRange+", ";
    });
    return stringifyRange.substring(0, stringifyRange.length - 2);
  }

  booleanToString(boolean) {
    return boolean ? 'Flying ' : 'Ground '
  }

  render() {
    const { selectedSquare, selectedUnit, phase, movedSquare } = this.props.boardObject.overlayObject;
    const { board, auth } = this.props;
    const highlightedPosition = movedSquare[0] != -1 ? movedSquare
      : selectedSquare[0] === -1 ? -1 : selectedSquare;
    const highlightedSquare = highlightedPosition === -1 ? -1 : board[highlightedPosition[0]][highlightedPosition[1]];
    const turnTitle = this.props.boardObject.turn != this.props.userId ? `Enemy Turn... ${this.props.opponents[this.props.boardId]}` : 'Your move';
    return (
      <div>
      {
        highlightedSquare === -1 ? <span>{turnTitle}</span> :
        <div className="MenuGame">
        <img className="MenuPic" src={ images.menuBar }/>
          {
            selectedUnit ?
            <div>
              <div className="HeroMenu">
                <div className="HeroPic" style={{ backgroundImage: `url(${heroes[selectedUnit.image]})` }}>
                </div>
              </div>
              {
                this.props.boardObject.turn !== this.props.userId || selectedUnit.active === false || this.props.boardObject[`${selectedUnit.army}`] !== this.props.userId ? null :
                <div>
                  <button className="BaseMenuButtons MoveButton" type="button" onClick={() => this.handleMove()}>{phase === 'moving' ? 'Stay' : phase === 'moved' || phase === 'attacking' ? 'Return' : 'Move'}</button>
                  <button className="BaseMenuButtons AttackButton" type="button" onClick={() => this.handleAttack()}>{phase === 'attacking' ? 'Cancel' : 'Attack'}</button>
                  <button className="BaseMenuButtons DefendButton" type="button" onClick={() => this.handleDefend()}>Defend</button>
                </div>
              }
            </div>
            :null
          }
          <div>
            <div className="TerrainPic" style={{ backgroundImage: `url(${images[highlightedSquare.image]})`}}>
            </div>
          </div>
         <button className="BaseMenuButtons CancelButton" type="button" onClick={() => this.handleDeselect()}>x</button>
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
