import React, { Component, PropTypes } from 'react';

export default class SquareDeprecated extends Component {

  constructor(props) {
    super(props);
  }

	handleClick(id) {
    this.props.onSelectSquare(id);
  }

  render() {
    const { id, terrain, turn } = this.props;
    return (
      <td className={ turn.selected === id ? 'col-md-0.5 success' : 'col-md-0.5' } onClick={() => this.handleClick(id)}>
        {id} : { terrain }
      </td>
    );
  }

}

SquareDeprecated.propTypes = {
	id: PropTypes.number,
	terrain: PropTypes.string,
  turn: PropTypes.object,
	onSelectSquare: PropTypes.func
};
