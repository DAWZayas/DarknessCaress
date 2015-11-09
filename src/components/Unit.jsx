import React, { Component, PropTypes } from 'react';

export default class Unit extends Component {

  render() {
    const { type, hp, mp, movement } = this.props;
    return (
      <li>
        <span>{type}: {hp}HP, {mp}MP, {movement} squares of movement.</span>
      </li>
    );
  }

}

Unit.propTypes = {
  type: PropTypes.string,
  hp: PropTypes.string,
  mp: PropTypes.string,
  movement: PropTypes.string
};
