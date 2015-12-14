import React, { Component, PropTypes } from 'react';

export default class Equipment extends Component {

  render() {
    const { name, damage, durability } = this.props;
    return (
      <li>
        <span>{name}: {damage} damage, {durability} durability.</span>
      </li>
    );
  }

}

Equipment.propTypes = {
  name: PropTypes.string,
  damage: PropTypes.string,
  durability: PropTypes.string
};
