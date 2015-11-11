import React, { Component, PropTypes } from 'react';

export default class TurnMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { turn } = this.props;
    return (
      <div>
        <span  className={turn.selected === -1? '' : 'hidden'}>
          <h3>Select a unit to move</h3>
        </span>
        <span  className={turn.selected === -1? 'hidden' : ''}>
          <h3>Select actions for this unit</h3>
        </span>
      </div>
    );
  }
}

TurnMenu.propTypes = {
  turn: PropTypes.object
};
