import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class Unit extends Component{
  render(){
    const { unit } = this.props;
    return( 
     <div id="Pokemon" className="Selectable">
        <figure>
            <Link to={`units/${unit.name}`}><UnitImage unit={unit}></Link>
        </figure>
        <div>
          <span>{unit.id}</span> - {unit.name.slice(0, 1).toUpperCase() + unit.name.slice(1)}
        </div>  
     </div>
    ); 
  }
}

Unit.propTypes = {
  unit: PropTypes.object
};
