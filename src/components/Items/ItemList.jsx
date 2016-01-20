import React, { Component, PropTypes } from 'react';

import Item from './Item';

export default class EquipmentList extends Component{
  
  render(){
    const { items } = this.props;
    return( 
      <div className="items">
        {
          items.map( (item, index) => {
            return (
              <Item key={index} item={item} />
            );
          })
        }
      </div>
    ); 
  }
}

EquipmentList.propTypes = {
  items: PropTypes.array
};
