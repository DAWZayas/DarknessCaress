import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class HeroDetail extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { hero } = this.props;
    else{
			return (
       <section className="PokeDetail">
         <h3>{hero.name.slice(0, 1).toUpperCase() + hero.name.slice(1)}</h3>
         <div className="PokeDetail-images">
          <img src={`${apiUrl}${hero.name}.gif`} width="80"/>
         </div>
         <div className="PokeDetail-info">
           <ul>
             <li>Type: {hero.type}</li>
             <li>Species: {hero.species}</li>
             <li>Attack: {hero.stats.attack}</li>
             <li>Defense: {hero.stats.defense}</li>
             <li>Hp: {hero.stats.hp}</li>
             <li>Speed: {hero.stats.speed}</li>
           </ul>
         </div>
       </section>
     );
		}
	}
}

HeroDetail.propTypes = {
  hero: PropTypes.object
};
