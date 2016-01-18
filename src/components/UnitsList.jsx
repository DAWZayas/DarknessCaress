import React, { Component, PropTypes } from 'react';
import Coverflow from 'react-coverflow';
//import pushState from 'redux-router';
//import UnitImage from './UnitImage';
//import Link from 'react-router';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';
export default class UnitsList extends Component{
  render(){
    const { pokemons } = this.props;
    return(
      <div id="Slider">
        <Coverflow width="960" height="500" displayQuantityOfSide={2} navigation={false}>
          {
            pokemons.map( (unit, index) => {
              if (unit.name.search(this.props.inputValue) > -1) {
                return ( <img key={ index } alt={ unit.name } url={ `units/${unit.name}` } src={ `${apiUrl}${unit.name}.gif` } width="300" /> );
             // return ( <UnitImage key={ index }  unit={ unit }/> );
              }
            })
          }
        </Coverflow>
      </div>
    );
  }
}

UnitsList.propTypes = {
  pokemons: PropTypes.array,
  inputValue: PropTypes.string
};
