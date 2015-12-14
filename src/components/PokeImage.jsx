import React, { Component, PropTypes } from 'react';

export default class PokeImage extends Component{
	render(){
		return ( <figure className="PokeDetail-image">
           	 <img src={`media/images/pokemons/${this.props.pokeName}.jpg`}/>
           </figure>
           );
	}
}
PokeImage.propTypes = {
  pokeName: PropTypes.string
};