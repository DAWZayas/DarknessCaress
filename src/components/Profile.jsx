import React, { Component } from 'react';
import { LeftNav, IconButton } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';

injecTapEventPlugin();

export default class Profile extends Component {

  constructor(props) {
    super(props);
  }
  toggle() {
    this.refs.rightNav.toggle();// Show/Hide the Menu
  }
  render() {
    const menuItems = [
      { route: 'Profile', text: 'Profile' },
      { route: 'Settings', text: 'Settings' },
      { route: 'Log_Out', text: 'Log_Out' },
    ];
    return (
      <span>
      <IconButton iconClassName="glyphicon glyphicon-user" onClick={(this.toggle.bind(this))} />
      <LeftNav ref="rightNav" openRight={true} docked={false} menuItems={menuItems} />
      </span> 
    );
  }
}
