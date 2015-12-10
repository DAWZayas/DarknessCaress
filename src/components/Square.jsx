import React, { Component, PropTypes } from 'react';

import { images } from '../utils/imageExports';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

	handleClick(id) {
    this.props.onSelectSquare(id);
  }

  render() {
    const { id, image, selected } = this.props;
    const select = selected === id ? 'success' : '';
    return (
      <td height="48px" width="48px" className={ select } onClick={() => this.handleClick(id)}>
        <img src={ images[image] } alt={ id } height="48px" width="48px" />
      </td>
    );
  }

}

Square.propTypes = {
  id: PropTypes.number,
	image: PropTypes.string,
  selected: PropTypes.number,
  onSelectSquare: PropTypes.func
};
