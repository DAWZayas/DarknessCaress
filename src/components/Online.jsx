import React, { Component, PropTypes } from 'react';
import { IconMenu, IconButton, FontIcon } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/lib/menus/menu-item';//the older folder(default) is bug
import MenuDivider from  'material-ui/lib/menus/menu-divider';//same as MenuItem

injecTapEventPlugin();

export default class Online extends Component {

  constructor(props) {
    super(props);
  }
  handleTouchTap(e){
    const { navigate } = this.props;
    const path = e.target.innerHTML.toLowerCase();
    navigate(path);
  }
  handleLog(){
    const { loggingState, logging } = this.props;
    loggingState(logging);
  }
  render() {
    return (
       <IconMenu iconButtonElement={<IconButton iconClassName="material-icons">account_circle</IconButton>}>
         <MenuItem primaryText="profile" onTouchTap={this.handleTouchTap.bind(this)} leftIcon={<FontIcon className="material-icons">person</FontIcon>} />
         <MenuItem primaryText="Settings" onTouchTap={this.handleTouchTap.bind(this)} leftIcon={<FontIcon className="material-icons">settings</FontIcon>} />
         <MenuItem primaryText="Help" onTouchTap={this.handleTouchTap.bind(this)} leftIcon={<FontIcon className="material-icons">help</FontIcon>} />
         <MenuDivider />
         <MenuItem primaryText="Log Out" onTouchTap={this.handleLog.bind(this)} leftIcon={<FontIcon className="glyphicon glyphicon-log-out" />} />
       </IconMenu>
    );
  }
}

Online.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  loggingState: PropTypes.func,
  logging: PropTypes.bool,
  navigate: PropTypes.func
};
