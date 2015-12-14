import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class Unit extends Component{
  
  render(){
    const { pokemon } = this.props;
    return( <div className="Pokemon">
              <figure>
                  <Link to={`/units/${pokemon.name}`}><img src={`${apiUrl}${pokemon.name}.gif`} width="80"/></Link>
              </figure>
              <div>
                <span>{pokemon.id}</span> - {pokemon.name}
              </div>  
           </div>
          ); 
  }
}

Unit.propTypes = {
  pokemon: PropTypes.object
};
