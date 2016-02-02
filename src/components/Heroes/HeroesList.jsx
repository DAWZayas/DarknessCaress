import React, { Component, PropTypes } from 'react';
import Slider from '../Slider/Slider';

export default class HeroList extends Component{
  render(){
    const {heroes, searchBy} = this.props;
    return(
      <div>
        <Slider heroes={ heroes } />
      </div>
    );
  }
}

HeroList.propTypes = {
  heroes: PropTypes.array
};
