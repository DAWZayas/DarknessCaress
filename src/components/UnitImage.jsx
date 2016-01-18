import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class UnitImage extends Component{
  render(){
    const { unit } = this.props;
    return( 
      <img key={ key } alt={unit.name} url={`units/${unit.name}`} src={`${apiUrl}${unit.name}.gif`} width="300" /> 
    ); 
  }
}

UnitImage.propTypes = {
  unit: PropTypes.object,
  key: PropTypes.number
};
