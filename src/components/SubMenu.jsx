import React, { Component, PropTypes } from 'react';

import TurnMenu from './TurnMenu';

export default class SubMenu extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { turn } = this.props;
    return (
      <div>
        <span  className={turn.active ? 'hidden' : ''}>
          <h3>Waiting for the opponent...</h3>
        </span>
        <span  className={turn.active ? '' : 'hidden'}>
          <TurnMenu turn={turn}/>
        </span>
      </div>
    );
  }
}

SubMenu.propTypes = {
  turn: PropTypes.object
};
