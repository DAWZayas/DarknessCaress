import React, { Component, PropTypes } from 'react';

export default class EquipmentSearch extends Component{
	render(){
		return( <div className="form-group">
            	<input className="form-control" type="text" placeholder="find your weapon" onChange={this.props.searchBy}/>
           </div>
          ); 
	}
}
EquipmentSearch.propTypes = {
  searchBy: PropTypes.func
};