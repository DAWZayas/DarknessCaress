import React, { Component } from 'react';
import { Link } from 'react-router';
import GameButton from  './GameButton';

export default class Title extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">Darkness Caress</Link>
        <GameButton />
      </div>
    );
  }
}
