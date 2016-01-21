import React, { Component, PropTypes } from 'react';

import { images } from '../../utils/imageExports';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { id, image, position, color } = this.props;
    return (
      <td className="squareHolder">
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
  color: PropTypes.number
};
