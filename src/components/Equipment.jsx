import React, { Component, PropTypes } from 'react';
const apiUrl = 'http://www.feplanet.net/media/sprites/8/items/sword/';

export default class Equipment extends Component{
  render(){
    return( <div className="equipment">
              <figure>
                  <img src={`${apiUrl}${this.props.item.name.toLowerCase()}.gif`} width="80"/>
              </figure>
              <div>
                <span>{this.props.item.id}</span> - {this.props.item.name}
              </div>  
           </div>
          ); 
  }
}
Equipment.propTypes = {
  item: PropTypes.object
};