import React, { Component, PropTypes } from 'react';
import HeroImage from './HeroImage';

export default class Slider extends Component{
  render(){
    const {heroes, searchBy} = this.props;
    return(
      //React resposive here


      }

    );
  }
}

Slider.propTypes = {
  heroes: PropTypes.array,
  searchBy: PropTypes.string
};
