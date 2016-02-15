import React, { Component, PropTypes } from 'react';
import { Avatar } from 'material-ui';
import IconButton from 'material-ui/lib/icon-button';

export default class AvatarList extends Component {
  handleOpenClick(avatar) {
    this.props.changeAvatar(avatar);
  }
  render() {
    return (
        <div>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar0')} >
            <Avatar src="http://www.feplanet.net/media/buddyicon/7/bartre.gif" size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'Ouroboros')} >
            <Avatar src="http://www.feplanet.net/media/buddyicon/7/bartre.gif" size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar2')} >
            <Avatar src="http://www.feplanet.net/media/buddyicon/7/bartre.gif" size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar3')} >
            <Avatar src="http://www.feplanet.net/media/buddyicon/7/bartre.gif" size={70} />
          </IconButton>
        </div>
    );
  }
}
