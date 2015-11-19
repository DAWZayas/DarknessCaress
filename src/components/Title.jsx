import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Title extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/">Darkness Caress</Link>
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <Link to="game">FIGHT!</Link>
      </div>
    );
  }
}
