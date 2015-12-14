import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class Unit extends Component{
<<<<<<< HEAD
  render() {
    return ( 
      <div className="Pokemon">
        <figure>
          <img src={`${apiUrl}${this.props.pokemon.name}.gif`} width="80"/>
        </figure>
        <div>
          <span>{this.props.pokemon.id}</span> - {this.props.pokemon.name}
        </div>  
      </div>
    ); 
=======
  
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
>>>>>>> d65bfef4318e8262e059be8f078bc79dc9000620
  }
}

Unit.propTypes = {
  pokemon: PropTypes.object
};
