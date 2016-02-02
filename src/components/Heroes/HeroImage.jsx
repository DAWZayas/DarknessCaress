import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class UnitImage extends Component{
  render(){
    const { key, unit } = this.props;
    return( 
      <img key={ key } alt={unit.name} url={`units/${unit.name}`} src={`${apiUrl}${unit.name}.gif`} /> 
    ); 
  }
}

UnitImage.propTypes = {
  key: PropTypes.number,
  unit: PropTypes.object
};
