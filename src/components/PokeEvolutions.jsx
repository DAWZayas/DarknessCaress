import React, { Component, PropTypes } from 'react';

export default class PokeEvolutions extends Component{

	render(){
		return ( <div className="PokeDetail-evolutions">
            <h4>Evoluciones:</h4>
            {
             this.props.pokemon.evolution.map( (pkm, index) => <figure key={index}><img src={`images/pokemons/${pkm}.jpg`} width="80"/></figure>)	
            }
            
           </div>
           );
	}
}
PokeEvolutions.propTypes = {
  pokemon: PropTypes.object
};