import React, { Component } from 'react';
import { LeftNav, IconButton, FontIcon } from 'material-ui';
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
    const menuItems = [
      { route: "Profile", text: "Profile" rightIcon:{<FontIcon className="material-icons">person</FontIcon>},
      { route: "Profile", text: "settings" rightIcon:{<FontIcon className="material-icons">settings</FontIcon>},
      { route: "help", text: "help" rightIcon:{<FontIcon className="material-icons">help</FontIcon>},
      { route: "Log_Out", text: "Log Out" rightIcon:{<FontIcon className="glyphicon glyphicon-log-out" />},
    ];
    return (
      <span>
      <IconButton iconClassName="material-icons" onClick={this.toggle.bind(this)}>home</IconButton>
      <LeftNav ref="rightNav" openRight={true} docked={false} menuItems={menuItems} />
      </span> 
    );
  }
}
