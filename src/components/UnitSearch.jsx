import React, { Component, PropTypes } from 'react';

export default class UnitSearch extends Component{
	render(){
		return(<div className="form-group">
            	<input className="form-control" type="text" placeholder="find your champions" onChange={this.props.searchBy}/>
           </div>
          ); 
	}
}
UnitSearch.propTypes = {
  searchBy: PropTypes.func
};