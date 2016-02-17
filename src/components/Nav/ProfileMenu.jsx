import React, { Component, PropTypes } from 'react';
import { IconMenu, IconButton, FontIcon } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';//the older folder(default) is bug
import MenuDivider from  'material-ui/lib/menus/menu-divider';//same as MenuItem
import Badge from 'material-ui/lib/badge';

export default class ProfileMenu extends Component {

  constructor(props) {
    super(props);
  }

  handleLogOutClick() {
    this.props.signOut();
  }

  handleTouchTap(path){
    const { navigate } = this.props;
    path === 'help' ? window.location.assign('https://en.wikipedia.org/wiki/Turn-based_strategy')
      : navigate(path);
  }

  render() {
    const { auth, notifications } = this.props;
    let notificationCount = 0;
    for( var keys in notifications ){
      if( notifications.hasOwnProperty(keys) ){
        notificationCount++;
      }
    }
    let badgeClassName = "notification_badge";
    if( notificationCount === 0 ){
       badgeClassName +=" transparent_badge";
       notificationCount = "";
     }
    return (
      <Badge badgeStyle={{backgroundColor: '#009688'}} badgeContent={ notificationCount } primary={ true } className={ badgeClassName } >
        <IconMenu iconButtonElement={<IconButton iconClassName="material-icons">account_circle</IconButton>}>
          { auth.authenticated === false ? <MenuItem primaryText="Log In" onTouchTap={this.handleTouchTap.bind(this, 'login')} leftIcon={<FontIcon className="glyphicon glyphicon-log-out icono-negro" />} /> : <span/> }
          <MenuItem primaryText="Profile" onTouchTap={this.handleTouchTap.bind(this, 'profile')} leftIcon={<FontIcon className="material-icons icono-negro">person</FontIcon>} />
          { auth.authenticated === true ?  <MenuItem primaryText="Notifications" onTouchTap={this.handleTouchTap.bind(this, 'notifications')} leftIcon={<FontIcon className="material-icons icono-negro">settings</FontIcon>} /> : <span/>}
          <MenuItem primaryText="Settings" onTouchTap={this.handleTouchTap.bind(this, 'settings')} leftIcon={<FontIcon className="material-icons icono-negro">settings</FontIcon>} />
          <MenuItem primaryText="Help" onTouchTap={this.handleTouchTap.bind(this, 'help')} leftIcon={<FontIcon className="material-icons icono-negro">help</FontIcon>} />
          { auth.authenticated === true ? <MenuItem primaryText="Log Out" onTouchTap={() => this.handleLogOutClick()} leftIcon={<FontIcon className="glyphicon glyphicon-log-out icono-negro" />} /> : <span/> }
        </IconMenu>
      </Badge>
    );
  }
}

ProfileMenu.propTypes = {
  // Injected by React Router
  auth: PropTypes.object,
  notifications: PropTypes.object,
  history: PropTypes.object,
  navigate: PropTypes.func,
  signOut: PropTypes.func
};
