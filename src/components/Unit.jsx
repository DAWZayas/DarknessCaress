import React, { Component, PropTypes } from 'react';
import UnitImage from './UnitImage';

export default class Unit extends Component{
  render(){
    const { key, unit } = this.props;
    return( 
     <div id="Pokemon" className="Selectable">
        <figure>
          <UnitImage key={key} unit={unit} />
        </figure>
        <div>
          <span>{unit.id}</span> - {unit.name.slice(0, 1).toUpperCase() + unit.name.slice(1)}
        </div>  
     </div>
    ); 
  }
}

Unit.propTypes = {
  key: PropTypes.number,
  unit: PropTypes.object
};
