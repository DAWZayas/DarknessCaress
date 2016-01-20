import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import injecTapEventPlugin from 'react-tap-event-plugin';

injecTapEventPlugin();

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
