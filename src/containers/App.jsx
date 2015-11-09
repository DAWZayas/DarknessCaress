import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import MenuContainer from './MenuContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h1><Link to="/">Main Menu (always visible)</Link></h1>
        </div>
        <MenuContainer />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};
