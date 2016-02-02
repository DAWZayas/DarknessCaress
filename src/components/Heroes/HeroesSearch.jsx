import React, { Component, PropTypes } from 'react'; 
import Slider from './Slider'; 
 
export default class UnitsList extends Component{ 
  render(){ 
    const {units, inputValue} = this.props; 
    return( 
      <div> 
        <Slider units={units} inputValue={inputValue}/> 
      </div> 
    );  
  } 
} 
 
UnitsList.propTypes = { 
  units: PropTypes.array, 
  inputValue: PropTypes.string 
};
