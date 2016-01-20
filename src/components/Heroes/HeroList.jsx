import React, { Component, PropTypes } from 'react';
import Coverflow from 'react-coverflow';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

import Hero from './Hero';

export default class HeroList extends Component{
  
  render(){
    const { heroes } = this.props;
    return( 
      <div className="heroes">
        <Coverflow width="960" height="500" displayQuantityOfSide={2} navigation={false}>
        {
          heroes.map( (hero, index) => {
            return (
              <img key={ index } alt={ hero.name } url={ `units/${hero.name}` } src={ `${apiUrl}${hero.name}.gif` } width="300" />
            );
          })
        }
        </Coverflow>
      </div>
    ); 
  }
}

HeroList.propTypes = {
  heroes: PropTypes.array
};
