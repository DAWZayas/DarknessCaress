import React, { Component, PropTypes } from 'react';
import Unit from './Unit';

export default class UnitsList extends Component{
  
  render(){
    return( <div className="Pokemons">
            {
              this.props.pokemons.map( pokemon => {
                if(pokemon.name.search(this.props.inputValue) >  -1) {
                  return (<Unit key={pokemon.id} pokemon={pokemon}/>);    
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