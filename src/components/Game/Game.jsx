import React, { Component, PropTypes } from 'react';

import Board from './Board';
import BoardMenu from './BoardMenu';

export default class Game extends Component {

  constructor(props) {
    super(props);
    const emptyOverlayArray = this.props.generateOverlayArray(this.props.board.length);
    this.state = {
      emptyOverlayArray: emptyOverlayArray,
      overlayArray: emptyOverlayArray,
      movedSquare: [-1, -1],
      selectedSquare: [-1, -1],
      selectedUnit: null,
      turn: 'start'
    };
  }

  selectSquare(position) {
    const unit = position[0] != -1 ? this.props.board[position[0]][position[1]].unit || null : null;
    this.setState({
      overlayArray: this.state.emptyOverlayArray,
      selectedSquare: position,
      selectedUnit: unit,
      turn: 'start'
    });
  }

  deSelectSquare() {
    this.setState({
      overlayArray: this.state.emptyOverlayArray,
      movedSquare: [-1, -1],
      selectedSquare: [-1, -1],
      selectedUnit: null,
      turn: 'start'
    });
  }

  selectMove() {
    const newOverlayArray = this.props.calculateMoves(this.props.board, this.state.selectedSquare, this.state.selectedUnit);
    this.setState({
      overlayArray: newOverlayArray,
      movedSquare: [-1, -1],
      turn: 'moving'
    });
  }

  moveUnit(position) {
    const positionX = position[0];
    const positionY = position[1];
    this.state.overlayArray[positionX][positionY] === 1
      && this.props.board[positionX][positionY].unit === undefined
      ? this.setState({
          overlayArray: this.state.emptyOverlayArray,
          movedSquare: position,
          turn: 'moved'
        })
      : null;
    this.forceUpdate();
  }

  selectAttack() {
    const attackingPosition = this.state.movedSquare[0] != -1 ? this.state.movedSquare : this.state.selectedSquare;
    const newOverlayArray = this.props.calculateAttackArea(this.props.board, attackingPosition, this.state.selectedUnit);
    this.setState({
      overlayArray: newOverlayArray,
      turn: 'attacking'
    });
  }

  deSelectAttack() {
    this.setState({
      overlayArray: this.state.emptyOverlayArray,
      turn: 'moved'
    })
  }

  attackUnit(position) {
    const positionX = position[0];
    const positionY = position[1];
    if(this.state.overlayArray[positionX][positionY] === 2 && this.props.board[positionX][positionY].unit != undefined && this.props.board[positionX][positionY].unit.army != this.state.selectedUnit.army) {
      this.setState({
        overlayArray: this.state.emptyOverlayArray,
        movedSquare: [-1, -1],
        selectedSquare: position,
        turn: 'start'
      });
      //CALCULATE ATTACKS
      this.props.updateBoards(OBJECT);
      //SAVE TO FIREBASE (UNIT.ACTIVE = FALSE) BOTH UNITS
    }
  }

  endMove() {
    const boardId = this.props.boardId;
    const startingPositionX = this.state.selectedSquare[0];
    const startingPositionY = this.state.selectedSquare[1];
    const finalPositionX = this.state.movedSquare[0];
    const finalPositionY = this.state.movedSquare[1];
    const finalUnit = Object.assign({}, this.state.selectedUnit, {active: false});
    this.setState({
      overlayArray: this.state.emptyOverlayArray,
      selectedSquare: this.state.movedSquare,
      movedSquare: [-1, -1],
      turn: 'start'
    });
    if(finalPositionX === -1) {
      let newBoard = this.props.board.slice();
      newBoard[startingPositionX][startingPositionY] = Object.assign({}, this.props.board[startingPositionX][startingPositionY], { unit: finalUnit });
      this.props.updateBoard(newBoard, this.props.boardId);
      //this.props.updateBoard(`boards/${boardId}/${startingPositionX}/${startingPositionY}`, { unit: finalUnit });
    }else{
      let newBoard = this.props.board.slice();
      newBoard[startingPositionX][startingPositionY] = Object.assign({}, this.props.board[startingPositionX][startingPositionY], { unit: null });
      newBoard[finalPositionX][finalPositionY] = Object.assign({}, this.props.board[finalPositionX][finalPositionY], { unit: finalUnit });
      this.props.updateBoard(newBoard, this.props.boardId);
      //this.props.updateBoard(`boards/${boardId}/${startingPositionX}/${startingPositionY}`, { unit: null });
      //this.props.updateBoard(`boards/${boardId}/${finalPositionX}/${finalPositionY}`, { unit: finalUnit });
    }
    this.forceUpdate();
  }

  render() {
    const { board } = this.props;
    return (
      <div>
        <Board board={board} boardObject={this.props.boardObject} overlayArray={this.state.overlayArray} selectSquare={this.selectSquare.bind(this)} moveUnit={this.moveUnit.bind(this)} attackUnit={this.attackUnit.bind(this)} { ...this.state } />
        <BoardMenu className="boardMenu" board={board} boardObject={this.props.boardObject} selectSquare={this.selectSquare.bind(this)} deSelectSquare={this.deSelectSquare.bind(this)} selectMove={this.selectMove.bind(this)} moveUnit={this.moveUnit.bind(this)} selectAttack={this.selectAttack.bind(this)} deSelectAttack={this.deSelectAttack.bind(this)} attackUnit={this.attackUnit.bind(this)} endMove={this.endMove.bind(this)} { ...this.state } />
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
