import React, { Component, PropTypes } from 'react';

export default class Square extends Component {

  render() {
    const { terrain } = this.props;
    return (
      <td className="col-md-0.5">
        { terrain }
      </td>
    );
  }

}

Square.propTypes = {
	terrain: PropTypes.string
};
