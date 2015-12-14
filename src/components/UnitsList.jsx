import React, { Component, PropTypes } from 'react';
import Unit from './Unit';

export default class UnitsList extends Component{
  
  render(){
<<<<<<< HEAD
    return( 
      <div className="Pokemons">
         {
           this.props.pokemons.map( pokemon => {
             if(pokemon.name.search(this.props.inputValue) >  -1) {
               return (<Unit key={pokemon.id} pokemon={pokemon}/>);    
             } 
           })
         }                                   
      </div>
     ); 
=======
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
>>>>>>> d65bfef4318e8262e059be8f078bc79dc9000620
  }
}

UnitsList.propTypes = {
  pokemons: PropTypes.array,
  inputValue: PropTypes.string
};
