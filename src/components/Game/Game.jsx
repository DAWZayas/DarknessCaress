import React, { Component, PropTypes } from 'react';

import Board from './Board';
import BoardMenu from './BoardMenu';
import EndGameModal from './EndGameModal';

export default class Game extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { board } = this.props;
    return (
      <div>
        { this.props.boardObject.winner != undefined
          ? <EndGameModal
              userId={this.props.auth.id}
              winner={this.props.boardObject.winner}
              boardId={this.props.boardId}
              eraseBoardFromFirebase={this.props.eraseBoardFromFirebase}
          />
          : null
        }
        <Board
          board={board}
          boardObject={this.props.boardObject}
          overlayArray={this.props.boardObject.overlayObject.overlayArray}
          selectSquare={this.props.selectSquare.bind(this)}
          moveUnit={this.props.moveUnit.bind(this)}
          attackUnit={this.props.attackUnit.bind(this)}
          { ...this.props }
        />
        <BoardMenu className="boardMenu"
          board={board}
          boardObject={this.props.boardObject}
          selectSquare={this.props.selectSquare.bind(this)}
          deSelectSquare={this.props.deSelectSquare.bind(this)}
          selectMove={this.props.selectMove.bind(this)}
          moveUnit={this.props.moveUnit.bind(this)}
          selectAttack={this.props.selectAttack.bind(this)}
          deSelectAttack={this.props.deSelectAttack.bind(this)}
          attackUnit={this.props.attackUnit.bind(this)}
          endMove={this.props.endMove.bind(this)}
          userId={this.props.auth.id}
          { ...this.props }
        />
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
