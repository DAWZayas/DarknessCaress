import React, { Component, PropTypes } from 'react';

export default class ItemSearch extends Component{
	render(){
		return( 
			<div className="form-group">
        <input className="form-control" type="text" placeholder="Find your weapon" onChange={this.props.searchBy} />
      </div>
    ); 
	}
}

ItemSearch.propTypes = {
  searchBy: PropTypes.func
};
