import React, { Component, PropTypes } from 'react';
import Equipment from './Equipment';

export default class EquipmentList extends Component{
  
  render(){
    return( <div className="equipments">
            {
              this.props.items.map( (item, index) => {
                if(item.name.search(this.props.inputValue) >  -1) {
                  return (<Equipment key={index} item={item}/>);    
                } 
              
              })
            }                                   
           </div>
          ); 
  }
}
EquipmentList.propTypes = {
  items: PropTypes.array,
  inputValue: PropTypes.string
};
