import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class UnitDetail extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { hero } = this.props;
    else{
			return (
       <section className="PokeDetail">
         <h3>{pokemon.name.slice(0, 1).toUpperCase() + pokemon.name.slice(1)}</h3>
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
  hero: PropTypes.object
};
