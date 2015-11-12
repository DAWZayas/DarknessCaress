import React, { Component, PropTypes } from 'react';

export default class Friend extends Component {

  render() {
    const { id, name, status } = this.props;
    return (
      <li>
        <span>{id} {name}: {status}.</span>
      </li>
    );
  }

}

Friend.propTypes = {
  id: PropTypes.number,
	name: PropTypes.string,
	status: PropTypes.string
};
