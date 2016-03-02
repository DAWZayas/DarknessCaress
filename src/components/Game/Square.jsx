import React, { Component, PropTypes } from 'react';

import { images } from '../../utils/imageExports';
import { heroes } from '../../utils/heroesExports';
import { cursors } from '../../utils/cursorExports';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

  handleSelectSquare(position) {
    switch(this.props.boardObject.overlayObject.phase){
      case 'start':
        this.props.selectSquare(position);
        break;
      case 'moving':
        this.props.moveUnit(position);
        break;
      case 'attacking':
        this.props.attackUnit(position);
        break;
    }
  }

  checkPositions() {
    const { selectedSquare } = this.props.boardObject.overlayObject;
    const { movedSquare } = this.props.boardObject.overlayObject;
    const { position } = this.props;
    return movedSquare[0] === -1 && movedSquare[1] === -1
      ? selectedSquare[0] === position[0] && selectedSquare[1] === position[1]
      : movedSquare[0] === position[0] && movedSquare[1] === position[1];
  }

  render() {
    const { id, image, position, color, unit } = this.props;
    const isSelected = this.checkPositions();
    return (
      <td className="squareHolder" onClick={() => this.handleSelectSquare(position)}>
        <div className="square">
          <img src={ images[image] } alt={ id } height="48px" width="48px" />
        </div>
        { unit ? (
        <div>
          <img className="squareUnit" src={ unit.active === false ? heroes[`${unit.image}_gray`] : heroes[unit.image] } alt={ id } height="48px" width="48px" />
          {
            this.props.boardObject[unit.army] === this.props.auth.id
              ? <img className="squareUnit" src={ cursors['good'] } alt={ id } height="48px" width="48px" />
              : <img className="squareUnit" src={ cursors['evil'] } alt={ id } height="48px" width="48px" />
          }
        </div>)
        : null }
        <div className="squareOverlay">
          <div className={`overlay${color}`} />
        </div>
        {
          isSelected ?
          (
            <div className="square">
              <img className="squareUnit" src={ cursors['cursor'] } alt={ id } height="48px" width="48px" />
            </div>
          )
          : null
        }
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
