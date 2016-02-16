import React, { Component, PropTypes } from 'react';
import { Avatar } from 'material-ui';
import IconButton from 'material-ui/lib/icon-button';

import { images } from '../../utils/imageProfileExports';

export default class AvatarList extends Component {
  handleOpenClick(avatar) {
    this.props.changeAvatar(avatar);
  }
  render() {
    return (
        <div>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar0')} >
            <Avatar src={ images.avatar0 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'Ouroboros')} >
            <Avatar src={ images.avatar1 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar2')} >
            <Avatar src={ images.avatar2 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar3')} >
            <Avatar src={ images.avatar3 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'Ouroboros')} >
            <Avatar src={ images.avatar4 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar2')} >
            <Avatar src={ images.avatar5 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar3')} >
            <Avatar src={ images.avatar6 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar0')} >
            <Avatar src={ images.avatar7 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'Ouroboros')} >
            <Avatar src={ images.avatar8 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar2')} >
            <Avatar src={ images.avatar9 } size={70} />
          </IconButton>
          <IconButton onFocus={this.handleOpenClick.bind(this, 'avatar3')} >
            <Avatar src={ images.avatar10 } size={70} />
          </IconButton>
        </div>
    );
  }
}
