import React, { Component, PropTypes } from 'react';
import Unit from './Unit';

export default class UnitsList extends Component{
  
  render(){
    const { pokemons } = this.props;
    return( <div className="Pokemons">
            {
              pokemons.map( (pokemon, index) => {
                if(pokemon.name.search(this.props.inputValue) >  -1) {
                  return (<Unit key={index} pokemon={pokemon}/>);    
                } 
              
              })
            }                                   
           </div>
          ); 
  }
}
UnitsList.propTypes = {
  pokemons: PropTypes.array,
  inputValue: PropTypes.string
};
