import React, { Component } from 'react';
import { IconMenu, IconButton, FontIcon } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';
import MenuItem from 'material-ui/lib/menus/menu-item';//the older folder(default) is bug
import MenuDivider from  'material-ui/lib/menus/menu-divider';//same as MenuItem 
injecTapEventPlugin();




export default class Profile extends Component {

  constructor(props) {
    super(props);
  }
  toggle() {
    this.refs.rightNav.toggle();
  }
  render() {

    return (
      <IconMenu iconButtonElement={<IconButton  iconClassName="glyphicon glyphicon-user" />}  width={320} >
       <MenuItem primaryText="Profile" rightIcon={<FontIcon className="glyphicon glyphicon-user" />} />
       <MenuItem primaryText="Settings" rightIcon={<FontIcon className="glyphicon glyphicon-cog" />} />
       <MenuItem primaryText="Help" rightIcon={<FontIcon className="glyphicon glyphicon-question-sign" />} />
       <MenuDivider />
       <MenuItem primaryText="Log out" rightIcon={<FontIcon className="glyphicon glyphicon-log-out" />} />
      </IconMenu>
    );
  }
}
