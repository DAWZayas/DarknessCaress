import React, { Component } from 'react';
import { IconMenu, IconButton, FontIcon } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/lib/menus/menu-item';//the older folder(default) is bug
import MenuDivider from  'material-ui/lib/menus/menu-divider';//same as MenuItem 
injecTapEventPlugin();




export default class MenuProfilePC extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <IconMenu iconButtonElement={<IconButton iconClassName="material-icons">home</IconButton>}>
       <MenuItem primaryText="Profile" rightIcon={<FontIcon className="material-icons">person</FontIcon>} />
       <MenuItem primaryText="Settings" rightIcon={<FontIcon className="material-icons">settings</FontIcon>} />
       <MenuItem primaryText="Help" rightIcon={<FontIcon className="material-icons">help</FontIcon>} />
       <MenuDivider />
       <MenuItem primaryText="Log out" rightIcon={<FontIcon className="glyphicon glyphicon-log-out" />} />
      </IconMenu>
    );
  }
}
