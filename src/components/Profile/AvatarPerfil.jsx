import React, { Component } from 'react';
import { Avatar } from 'material-ui';

export default class AvatarPerfil extends Component {
  render() {
    return (
        <div className="overlap">
            <img id="avatarHolder" src="http://vignette4.wikia.nocookie.net/cardfight/images/f/fa/Ouroboros.png"/>
            <Avatar src="http://www.feplanet.net/media/buddyicon/7/bartre.gif" size={70} />
        </div>
    );
  }
}
