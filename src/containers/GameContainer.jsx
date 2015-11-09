import React, { Component, PropTypes } from 'react';

export default class GameContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Page of the game</h1>
      </div>
    );
  }
}

GameContainer.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};
