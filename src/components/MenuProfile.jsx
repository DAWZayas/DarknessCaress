import React, { Component } from 'react';
import { LeftNav, IconButton, MenuItem } from 'material-ui';
import { Link } from 'react-router';
import injecTapEventPlugin from 'react-tap-event-plugin';

injecTapEventPlugin();

export default class MenuProfile extends Component {

  constructor(props) {
    super(props);
  }
  toggle() {
    this.refs.rightNav.toggle();// Show/Hide the Menu
  }
  render() {
    return (
      <span>
      <IconButton iconClassName="material-icons" onClick={this.toggle.bind(this)}>home</IconButton>
      <LeftNav ref="rightNav" openRight docked={false}>
        <MenuItem><Link to="profile" onClick={this.toggle.bind(this)}>Profile</Link></MenuItem>
        <MenuItem><Link to="settings" onClick={this.toggle.bind(this)}>Settings</Link></MenuItem>
        <MenuItem><Link to="help" onClick={this.toggle.bind(this)}>Help</Link></MenuItem>
        <MenuItem><Link to="logout" onClick={this.toggle.bind(this)}>Log Out</Link></MenuItem>
      </LeftNav>
      </span> 
    );
  }
}
