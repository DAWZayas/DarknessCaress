import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class Hero extends Component{
  render(){
    const { hero } = this.props;
    return(
      <div className="hero">
        <figure>
          <img src={`${apiUrl}${hero.name.toLowerCase()}.gif`} width="80"/>
        </figure>
        <div>
          <span>{hero.id} - {hero.name.slice(0, 1).toUpperCase() + hero.name.slice(1)}</span>
        </div>  
      </div>
    ); 
  }
}

Hero.propTypes = {
  hero: PropTypes.object
};
