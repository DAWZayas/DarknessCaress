import React, { Component, PropTypes } from 'react';

export default class EquipmentSearch extends Component{
	render(){
		return( <div className="Search">
            	<input type="text" placeholder="find your weapon" onChange={this.props.searchBy}/>
           </div>
          ); 
	}
}
EquipmentSearch.propTypes = {
  searchBy: PropTypes.func
};