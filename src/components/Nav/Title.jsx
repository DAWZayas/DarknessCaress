import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Title extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to="/"><span className="titulo">Darkness Caress</span></Link>
      </div>
    );
  }
}
