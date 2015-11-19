import React, { Component } from 'react';
import { LeftNav, AppBar } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';

import MenuProfile from './MenuProfile';
import Title from './Title';

injecTapEventPlugin();

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    this.refs.leftNav.toggle();// Show/Hide the Menu
  }

  render() {
    const menuItems = [
      { route: '/', text: 'Home' },
      { route: 'game', text: 'Game Guide' },
      { route: 'units', text: 'Characteres' },
      { route: 'equipment', text: 'Equipment' },
    ];

    return (
      <nav>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
        <AppBar title={<Title />} onLeftIconButtonTouchTap={this.handleClick.bind(this) } iconElementRight={<MenuProfile />} />
      </nav> 
    );
  }
}
