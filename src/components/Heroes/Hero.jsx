import React, { Component, PropTypes } from 'react';
import HeroImage from './HeroImage';

export default class Hero extends Component{
  render(){
    const { key, hero } = this.props;
    return(
     <div id="Pokemon" className="Selectable">
        <figure>
          <HeroImage key={key} hero={ hero } />
        </figure>
        <div>
          <span>{ hero.id }</span> - { hero.name.slice(0, 1).toUpperCase() + hero.name.slice(1) }
        </div>
     </div>
    );
  }
}

Hero.propTypes = {
  key: PropTypes.number,
  hero: PropTypes.object
};
