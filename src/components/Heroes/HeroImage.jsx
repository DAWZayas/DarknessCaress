import React, { Component, PropTypes } from 'react';
import { Avatar } from 'material-ui';

import { imagesAvatar } from '../../utils/imagesHeroesAvatar';


export default class HeroImage extends Component{
  render(){
    const { hero } = this.props;
    return(
      <Avatar src={ imagesAvatar[hero.image] } size={50} />
    );
  }
}

HeroImage.propTypes = {
  hero: PropTypes.object
};
