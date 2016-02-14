import React, { Component, PropTypes } from 'react';
import Coverflow from 'react-coverflow';
import HeroImage from './HeroImage';

export default class Slider extends Component{
  render(){
    const {heroes, searchBy} = this.props;
    return(
      //React resposive here
      <Coverflow
        displayQuantityOfSide={2}
        navigation={false}
        enableHeading={false}
        enableScroll={true}
        media={{
          '@media (max-width: 900px)': {
            width: 'auto',
            height: '125px'
          },
          '@media (min-width: 900px)': {
            width: 'auto',
            height: '600px'
          }
        }}
      >
      {
      heroes.map((hero, index)=>{
      	if(hero.name.search(searchBy) > -1){
          return(
            //FIXME:<SliderBack unit={unit} />
            <HeroImage key={index} hero={ hero } />
          );
        }
      })
      }
    </Coverflow>
    );
  }
}

Slider.propTypes = {
  heroes: PropTypes.array,
  searchBy: PropTypes.string
};
