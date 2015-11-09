import React, { Component, PropTypes } from 'react';

export default class Friend extends Component {

  render() {
    const { name, status } = this.props;
    return (
      <li>
        <span>{name}: {status}.</span>
      </li>
    );
  }

}

Friend.propTypes = {
	name: PropTypes.string,
	status: PropTypes.string
};
