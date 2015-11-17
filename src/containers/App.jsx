import React, { Component, PropTypes } from 'react';
import Nav from '../components/Nav';
import MenuContainer from './MenuContainer';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <MenuContainer />
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};
