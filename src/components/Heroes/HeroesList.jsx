import React, { Component, PropTypes } from 'react';
import Hero from './Hero';

export default class HeroesList extends Component{
  render(){
    const {heroes, searchBy, user} = this.props;
    return(
      <div>
      {
        heroes.map((hero, index)=>{
          if(hero.name.search(searchBy) > -1){
            return(
              <Hero user= {user} key={index} hero={hero} buyHeroe= {this.props.buyHeroe} />
            );
          }
        })
      }
      </div>
    );
  }
}

HeroesList.propTypes = {
  heroes: PropTypes.array,
  searchBy: PropTypes.string,
  user: PropTypes.object
};
