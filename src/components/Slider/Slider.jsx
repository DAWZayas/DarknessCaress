import React, { Component, PropTypes } from 'react';
import Carousel from 'nuka-carousel';
import Hero from '../Heroes/Hero';
import decorator from './SliderDecorator.js';

export default class Slider extends Component{
  render(){
    const {heroes, searchBy} = this.props;
    return(
      //React resposive here
      <Carousel ref={"carousel"} decorators={decorator} slidesToShow={5} slidesToScroll={"auto"} cellSpacing={4}>
      {
      heroes.map((hero, index)=>{
      	if(hero.name.search(searchBy) > -1){
          return(
            //FIXME:<SliderBack unit={unit} />
            <Hero key={index} hero={ hero } />
          );
        }
      })
      }
      </Carousel>
    );
  }
}

Slider.propTypes = {
  heroes: PropTypes.array,
  searchBy: PropTypes.string
};
