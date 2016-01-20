import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://www.feplanet.net/media/sprites/8/items/sword/';

export default class Item extends Component{
  render(){
    const { item } = this.props;
    return(
      <div className="item">
        <figure>
          <img src={`${apiUrl}${item.name.toLowerCase()}.gif`} width="80"/>
        </figure>
        <div>
          <span>{item.id} - {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}</span>
        </div>  
      </div>
    ); 
  }
}

Item.propTypes = {
  item: PropTypes.object
};
