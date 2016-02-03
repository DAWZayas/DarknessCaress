import React, { Component, PropTypes } from 'react';

import Board from './Board';
import BoardMenu from './BoardMenu';

export default class Game extends Component {

  constructor(props) {
    super(props);
  }

  isEndOfTurn(army) {
    //check the board for active units in this army....
    return true;
  }

  selectSquare(position) {
    const unit = position[0] !== -1 ? this.props.board[position[0]][position[1]].unit || null : null;
    const overlayObject = {
      overlayArray: this.props.boardObject.overlayObject.emptyOverlayArray,
      selectedSquare: position,
      selectedUnit: unit,
      phase: 'start'
    };
    this.props.updateOverlay(this.props.boardId, overlayObject);
  }

  deSelectSquare() {
    const overlayObject = {
      overlayArray: this.props.boardObject.overlayObject.emptyOverlayArray,
      movedSquare: [-1, -1],
      selectedSquare: [-1, -1],
      selectedUnit: null,
      phase: 'start'
    };
    this.props.updateOverlay(this.props.boardId, overlayObject);
  }

  selectMove() {
    const newOverlayArray = this.props.calculateMoves(this.props.board, this.props.boardObject.overlayObject.selectedSquare, this.props.boardObject.overlayObject.selectedUnit);
    const overlayObject = {
      overlayArray: newOverlayArray,
      movedSquare: [-1, -1],
      phase: 'moving'
    };
    this.props.updateOverlay(this.props.boardId, overlayObject);
  }

  moveUnit(position) {
    const positionX = position[0];
    const positionY = position[1];
    if(this.props.boardObject.overlayObject.overlayArray[positionX][positionY] === 1 && this.props.board[positionX][positionY].unit === undefined) {
      const overlayObject = {
        overlayArray: this.props.boardObject.overlayObject.emptyOverlayArray,
        movedSquare: position,
        phase: 'moved'
      };
      this.props.updateOverlay(this.props.boardId, overlayObject);
    }
  }

  selectAttack() {
    const attackingPosition = this.props.boardObject.overlayObject.movedSquare[0] != -1 ? this.props.boardObject.overlayObject.movedSquare : this.props.boardObject.overlayObject.selectedSquare;
    const newOverlayArray = this.props.calculateAttackArea(this.props.board, attackingPosition, this.props.boardObject.overlayObject.selectedUnit);
    const overlayObject = {
      overlayArray: newOverlayArray,
      phase: 'attacking'
    };
    this.props.updateOverlay(this.props.boardId, overlayObject);
  }

  deSelectAttack() {
    const overlayObject = {
      overlayArray: this.props.boardObject.overlayObject.emptyOverlayArray,
      phase: 'moved'
    };
    this.props.updateOverlay(this.props.boardId, overlayObject);
  }

  attackUnit(position) {
    const { boardId } = this.props;
    const positionX = position[0];
    const positionY = position[1];
    if(this.props.boardObject.overlayObject.overlayArray[positionX][positionY] === 2 && this.props.board[positionX][positionY].unit != undefined && this.props.board[positionX][positionY].unit.army != this.props.boardObject.overlayObject.selectedUnit.army) {
      const oldEnemyUnit = this.props.board[positionX][positionY].unit;
      const newEnemyUnit = oldEnemyUnit.hp - 10 > 0 ? Object.assign({}, oldEnemyUnit, {hp: oldEnemyUnit.hp - 10}) : null;
      let newBoard = this.props.board.slice();
      newBoard[positionX][positionY] = Object.assign({}, this.props.board[positionX][positionY], { unit: newEnemyUnit });
      this.props.updateBoard(boardId, newBoard);
      this.endMove();
    }
  }

  endMove() {
    const { boardId } = this.props;
    let selectedSquare = [-1, -1];
    const startingPositionX = this.props.boardObject.overlayObject.selectedSquare[0];
    const startingPositionY = this.props.boardObject.overlayObject.selectedSquare[1];
    const finalPositionX = this.props.boardObject.overlayObject.movedSquare[0];
    const finalPositionY = this.props.boardObject.overlayObject.movedSquare[1];
    const finalUnit = Object.assign({}, this.props.boardObject.overlayObject.selectedUnit, {active: false});
    let newBoard = this.props.board.slice();
    if(finalPositionX === -1) {
      newBoard[startingPositionX][startingPositionY] = Object.assign({}, this.props.board[startingPositionX][startingPositionY], { unit: finalUnit });
      selectedSquare = this.props.boardObject.overlayObject.selectedSquare;
    }else{
      newBoard[startingPositionX][startingPositionY] = Object.assign({}, this.props.board[startingPositionX][startingPositionY], { unit: null });
      newBoard[finalPositionX][finalPositionY] = Object.assign({}, this.props.board[finalPositionX][finalPositionY], { unit: finalUnit });
      selectedSquare = this.props.boardObject.overlayObject.movedSquare;
    }
    this.props.updateBoard(boardId, newBoard);
    this.props.uploadBoardToFirebase(boardId, newBoard);
    const overlayObject = {
      overlayArray: this.props.boardObject.overlayObject.emptyOverlayArray,
      selectedSquare: selectedSquare,
      selectedUnit: finalUnit,
      movedSquare: [-1, -1],
      phase: 'start'
    };
    this.props.updateOverlay(boardId, overlayObject);
    if(this.isEndOfTurn(finalUnit.army)) {
      this.props.endTurn(boardId, newBoard);
    }
  }

  render() {
    const { board } = this.props;
    return (
      <div>
        <Board board={board} boardObject={this.props.boardObject} overlayArray={this.props.boardObject.overlayObject.overlayArray} selectSquare={this.selectSquare.bind(this)} moveUnit={this.moveUnit.bind(this)} attackUnit={this.attackUnit.bind(this)} { ...this.props } />
        <BoardMenu className="boardMenu" board={board} boardObject={this.props.boardObject} selectSquare={this.selectSquare.bind(this)} deSelectSquare={this.deSelectSquare.bind(this)} selectMove={this.selectMove.bind(this)} moveUnit={this.moveUnit.bind(this)} selectAttack={this.selectAttack.bind(this)} deSelectAttack={this.deSelectAttack.bind(this)} attackUnit={this.attackUnit.bind(this)} endMove={this.endMove.bind(this)} userId={this.props.auth.id} { ...this.props } />
      </div>
    );
  }

}

Game.propTypes = {
  board: PropTypes.array,
  boardId: PropTypes.string,
  calculateMoves: PropTypes.func,
  generateOverlayArray: PropTypes.func,
  updateBoards: PropTypes.func
};
