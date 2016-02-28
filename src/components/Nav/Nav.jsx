import React, { Component, PropTypes } from 'react';
import { LeftNav, AppBar, FontIcon} from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuDivider from 'material-ui/lib/menus/menu-divider';

import Title from './Title';
import ProfileMenu from './ProfileMenu';
import ProfileNav from './ProfileNav';

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.registerListeners();
    this.props.notificationListener();
    this.props.heroesListeners();
  }

  componentWillUnmount() {
    this.props.unregisterListeners();
    this.props.notificationUnlistener();
    this.props.heroesUnListeners();
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
    const { auth, notifications, navigate, user } = this.props;
    const avatar = !auth.authenticated || !user ? <div id="headerNav">DarknessCaress</div> : <ProfileNav user={user} />;
  const myleftnav = {
    backgroundColor: '#616161',
    fontFamily: 'Arial Black, Arial',
    fontSize: '35px'
  }
    return (
      <nav>
        <LeftNav ref="leftNav" id="myleftnav" style={myleftnav} docked={false} header={avatar} disableSwipeToOpen>
          <MenuItem primaryText="Home" onTouchTap={this.handleTouchTap.bind(this, '/')} leftIcon={ <FontIcon className="material-icons icono-negro">home</FontIcon> }  />
          { auth.authenticated === true ? <MenuItem primaryText="Game" onTouchTap={this.handleTouchTap.bind(this, 'game')} /> : <span/> }
          <MenuDivider />
          <MenuItem primaryText="GitHub" onTouchTap={this.handleTouchTap.bind(this, 'github')} />
          <MenuItem primaryText="Follow Us :)" onTouchTap={this.handleTouchTap.bind(this, 'twitter')} />
        </LeftNav>
          <AppBar className="appBarStyle" title={ <Title /> } onLeftIconButtonTouchTap={ this.handleToggle.bind(this) } iconElementRight={<ProfileMenu user={user} auth={auth} notifications={notifications}navigate={navigate} signOut={this.props.signOut} />} />
          {this.props.children}
      </nav>
    );
  }
}

Nav.propTypes = {
  // Injected by React Router
  user: PropTypes.object,
  children: PropTypes.node,
  auth: PropTypes.object,
  notifications: PropTypes.object,
  navigate: PropTypes.func,
  signOut: PropTypes.func,
  registerNavListeners: PropTypes.func,
  unregisterNavListeners: PropTypes.func,
  notificationListener: PropTypes.func,
  notificationListenerKiller: PropTypes.func,
  heroesListeners: PropTypes.func,
  heroesUnListeners: PropTypes.func
};
