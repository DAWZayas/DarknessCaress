import React, { Component, PropTypes } from 'react';
import { LeftNav, AppBar} from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injecTapEventPlugin from 'react-tap-event-plugin';
import MenuDivider from 'material-ui/lib/menus/menu-divider';

import Title from './Title';
import ProfileMenu from './ProfileMenu';

injecTapEventPlugin();

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  handleToggle() {
    this.refs.leftNav.toggle();// Show/Hide the Menu
  }

  handleTouchTap(path){
    const { navigate } = this.props;
    //const path = e.target.innerHTML.toLowerCase();
    path === 'github' ? window.location.assign('https://github.com/DAWZayas/DarknessCaress')
      : path ==='twitter' ? window.location.assign('https://twitter.com/Darkness_Caress') 
      : navigate(path);
    this.handleToggle();
  }

  render() {
    const { navigate } = this.props;
    return (
      <nav>
        <LeftNav ref="leftNav" docked={false} header={<div id="headerNav">DarknessCaress</div>} disableSwipeToOpen>
          <MenuItem primaryText="Home" onTouchTap={this.handleTouchTap.bind(this, '/')} />
          <MenuItem primaryText="Game" onTouchTap={this.handleTouchTap.bind(this, 'game')} />
          <MenuDivider />
          <MenuItem primaryText="GitHub" onTouchTap={this.handleTouchTap.bind(this, 'github')} />
          <MenuItem primaryText="Follow Us :)" onTouchTap={this.handleTouchTap.bind(this, 'twitter')} />
        </LeftNav>
      <AppBar title={<Title />} onLeftIconButtonTouchTap={this.handleToggle.bind(this)} iconElementRight={<ProfileMenu navigate={navigate} />} />
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
