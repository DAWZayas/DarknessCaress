import React, { Component, PropTypes } from 'react';

import { images } from '../../utils/imageExports';

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

  render() {
    const { id, image, position, color } = this.props;
    return (
      <td className="squareHolder" onClick={() => this.handleSelectSquare(position)}>
        <div className="square">
          <img src={ images[image] } alt={ id } height="48px" width="48px" />
        </div>
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
