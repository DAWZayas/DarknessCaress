import React, { Component, PropTypes } from 'react';
import { Avatar } from 'material-ui';

import { images } from '../../utils/imageProfileExports';

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
      <div id="headerNav">
          <Avatar id="avatarHolder3" src={ images[user.avatar] } size={50} />
          <p>{user.username}</p>
          <div className="mmrcontainer" ><h6>{user.mmr}</h6></div>
      </div>
    );
  }
}

Nav.propTypes = {
  // Injected by React Router
  user: PropTypes.object,
};
