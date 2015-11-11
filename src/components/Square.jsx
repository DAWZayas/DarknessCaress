import React, { Component, PropTypes } from 'react';

export default class Square extends Component {

  constructor(props) {
    super(props);
  }

	handleClick(id) {
    this.props.onSelectSquare(id);
  }

  render() {
    const { id, terrain, selected } = this.props;
    const select = selected === id ? 'success' : '';
    return (
      <td className={ select } onClick={() => this.handleClick(id)}>
        {id} : { terrain }
      </td>
    );
  }

}

Square.propTypes = {
	id: PropTypes.number,
	terrain: PropTypes.string,
  selected: PropTypes.number,
  onSelectSquare: PropTypes.func
};
