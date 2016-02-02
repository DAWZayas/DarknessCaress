import React, { Component, PropTypes } from 'react';
import Carousel from 'nuka-carousel';
import { SliderUnit as Unit } from '../Unit/SliderUnit';
import decorator from './SliderDecorator.js';

export default class Slider extends Component{
  render(){
    const {units, inputValue} = this.props;
    return(
      //React resposive here
      <Carousel ref={"carousel"} decorators={decorator} slidesToShow={5} slidesToScroll={"auto"} cellSpacing={4}>
      {
      units.map((unit, index)=>{
      	if(unit.name.search(inputValue) > -1){
          return(
            //FIXME:<SliderBack unit={unit} />
            <Unit key={index} unit={unit} />
          );
        }
      })
      }
      </Carousel>
    ); 
  }
}

Slider.propTypes = {
  units: PropTypes.array,
  inputValue: PropTypes.string
};
