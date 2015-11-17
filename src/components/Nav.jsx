import React, { Component } from 'react';
import { LeftNav, AppBar } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';
import Profile from '../components/Profile';

injecTapEventPlugin();

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    this.refs.leftNav.toggle();// Show/Hide the Menu
  }

  render() {
    const fancyTitle = (
      <Link to="/" class="fancyTitle">Darkness Caress</Link>
    );
    const menuItems = [
      { route: 'Home', text: 'Home' },
      { route: 'gameGuide', text: 'Game Guide' },
      { route: 'Characteres', text: 'Characteres' },
      { route: 'Equipment', text: 'Equipment' },
    ];
    return (
      <nav>
        <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
          <AppBar title={fancyTitle} onLeftIconButtonTouchTap={this.handleClick.bind(this) } iconElementRight={<Profile />} />
      </nav> 
    );
  }
}
