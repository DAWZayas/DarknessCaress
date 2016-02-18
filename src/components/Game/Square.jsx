import React, { Component, PropTypes } from 'react';

import { images } from '../../utils/imageExports';
import { heroes } from '../../utils/heroesExports';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

  handleSelectSquare(position) {
    const { board, boardObject, boardId} = this.props;
    switch(this.props.boardObject.overlayObject.phase){
      case 'start':
        this.props.selectSquare(position, board, boardObject, boardId);
        break;
      case 'moving':
        this.props.moveUnit(position, board, boardObject, boardId);
        break;
      case 'attacking':
        this.props.attackUnit(boardId, position, boardObject, board);
        break;
    }
  }

  render() {
    const { id, image, position, color, unit } = this.props;
    return (
      <td className="squareHolder" onClick={() => this.handleSelectSquare(position)}>
        <div className="square">
          <img src={ images[image] } alt={ id } height="48px" width="48px" />
        </div>
        { unit ? (
        <div className="squareUnit">
          <img src={ heroes[unit.image] } alt={ id } height="48px" width="48px" />
        </div>)
        : null }
        <div className="squareOverlay">
          <div className={`overlay${color}`} />
        </div>
      </td>
    );
  }

}

Square.propTypes = {
  id: PropTypes.number,
	image: PropTypes.string,
  position: PropTypes.array,
  color: PropTypes.number,
  selectSquare:PropTypes.func,
  turn: PropTypes.string
};
