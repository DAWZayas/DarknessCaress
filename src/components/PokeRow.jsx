import React, { Component, PropTypes } from 'react';

export default class PokeRow extends Component{
	
  render(){
    return ( 
    	<ul>
      	  <li>{this.props.children}</li>
          <li>{this.props.property}</li>
        </ul> 
           );         
	}
}
PokeRow.propTypes = {
  children: PropTypes.node,
  property : PropTypes.string
};