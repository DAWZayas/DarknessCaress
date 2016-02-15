import React, { Component, PropTypes } from 'react';
import { Avatar } from 'material-ui';

import { images } from '../../utils/imageProfileExports';

export default class AvatarPerfil extends Component {
  render() {
    const { user } = this.props;
    return (
        <div className="overlap">
            <img id="avatarHolder" src={ images.Ouroboros }/>
            <Avatar src={ images[user.avatar] } size={70} />
        </div>
    );
  }
}
AvatarPerfil.propTypes = {
  user: PropTypes.object
};
