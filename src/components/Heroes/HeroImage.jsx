import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class HeroImage extends Component{
  render(){
    const { key, hero } = this.props;
    /*url={`heroes/${hero.name}`}*/
    return(
      <img key={ key } alt={hero.name} src={`${apiUrl}${hero.name}.gif`} />
    );
  }
}

HeroImage.propTypes = {
  key: PropTypes.number,
  hero: PropTypes.object
};
