import React, { Component, PropTypes } from 'react';
import { IconMenu, IconButton, FontIcon } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/lib/menus/menu-item';//the older folder(default) is bug
import MenuDivider from  'material-ui/lib/menus/menu-divider';//same as MenuItem

injecTapEventPlugin();

export default class Offline extends Component {

  constructor(props) {
    super(props);
  }
  handleTouchTap(e){
    const { navigate } = this.props;
    const path = e.target.innerHTML.toLowerCase();
    path === 'help'
      ? window.location.assign('https://en.wikipedia.org/wiki/Turn-based_strategy')
      : navigate(path);
  }
  handleLog(){
    const { loggingState, logging, navigate } = this.props;
    loggingState(logging);
    navigate('/');
  }
  render() {  
    return (
      <IconMenu iconButtonElement={<IconButton iconClassName="material-icons">account_circle</IconButton>}>
        <MenuItem primaryText="Log In" onTouchTap={this.handleLog.bind(this)} leftIcon={<FontIcon className="glyphicon glyphicon-log-out icono-negro" />} />
        <MenuDivider />
        <MenuItem primaryText="Settings" onTouchTap={this.handleTouchTap.bind(this)} leftIcon={<FontIcon className="material-icons icono-negro">settings</FontIcon>} />
        <MenuItem primaryText="Help" onTouchTap={this.handleTouchTap.bind(this)} leftIcon={<FontIcon className="material-icons icono-negro">help</FontIcon>} />
      </IconMenu>
    );
  }
}

Offline.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  navigate: PropTypes.func,
  logging: PropTypes.bool,
  loggingState : PropTypes.func
};
