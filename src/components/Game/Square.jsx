import React, { Component, PropTypes } from 'react';

import { images } from '../../utils/imageExports';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { id, image, position } = this.props;
    return (
      <td height="48px" width="48px">
        <img src={ images[image] } alt={ id } height="48px" width="48px" />
      </td>
    );
  }

}

Square.propTypes = {
  id: PropTypes.number,
	image: PropTypes.string,
  position: PropTypes.array
};
