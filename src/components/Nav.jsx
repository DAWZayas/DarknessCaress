import React, { Component, PropTypes } from 'react';
import { LeftNav, AppBar } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
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

  handleTouchTap(e){
    const { navigate } = this.props;
    const path = e.target.innerHTML.toLowerCase();
    navigate(path);
    this.refs.leftNav.toggle();
  }

  render() {
    return (
      <nav>
        <LeftNav ref="leftNav" docked={false} disableSwipeToOpen={false}>
          <MenuItem primaryText="Home" onTouchTap={this.handleTouchTap.bind(this)} />
          <MenuItem primaryText="Game" onTouchTap={this.handleTouchTap.bind(this)} />
          <MenuItem primaryText="Profile" onTouchTap={this.handleTouchTap.bind(this)} />
          <MenuItem primaryText="Stuff" onTouchTap={this.handleTouchTap.bind(this)} />
        </LeftNav>
        <AppBar title={<Title />} onLeftIconButtonTouchTap={this.handleClick.bind(this) } iconElementRight={<MenuProfile />} />
      {this.props.children}
      </nav>
    );
  }
}

Nav.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  navigate: PropTypes.func
};
