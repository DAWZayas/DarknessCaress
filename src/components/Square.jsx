import React, { Component, PropTypes } from 'react';

import { images } from '../utils/imageExports';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

	handleClick(position, index) {
    this.props.onSelectSquare(position, index);
  }

  render() {
    const { id, image, position, index } = this.props;
    return (
      <td height="48px" width="48px" onClick={() => this.handleClick(position, index)}>
        <img src={ images[image] } alt={ id } height="48px" width="48px" />
      </td>
    );
  }

}

Square.propTypes = {
  id: PropTypes.number,
	image: PropTypes.string,
  onSelectSquare: PropTypes.func,
  position: PropTypes.array,
  index: PropTypes.number
};
