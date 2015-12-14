import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class UnitDetail extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { pokemon } = this.props;
		const { pokeName } = this.props;
		if(pokemon === undefined){
			return ( <h1> {pokeName} no es un Pokémon :(</h1>);
		}
		else{
			return (
				   <section className="PokeDetail">
			         <h4>{pokemon.name}</h4>
			       	<div className="PokeDetail-images">
			       	  <img src={`${apiUrl}${pokemon.name}.gif`} width="80"/>
			        </div>
			        <div className="PokeDetail-info">
			         <ul>
			         <li>Type: {pokemon.type}</li>
			         <li>Species: {pokemon.species}</li>
			         <li>Attack: {pokemon.stats.attack}</li>
			         <li>Defense: {pokemon.stats.defense}</li>
			         <li>Hp: {pokemon.stats.hp}</li>
			         <li>Speed: {pokemon.stats.speed}</li>
			         </ul>
			        </div>
			       </section>
			       );
		}
	}
}

UnitDetail.propTypes = {
  pokemon: PropTypes.object,
  pokeName: PropTypes.string
};
