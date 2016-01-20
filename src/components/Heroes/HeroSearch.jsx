import React, { Component, PropTypes } from 'react';

export default class HeroSearch extends Component{
	render(){
		return( 
			<div className="form-group">
        <input className="form-control" type="text" placeholder="Find your hero" onChange={this.props.searchBy} />
      </div>
    ); 
	}
}

HeroSearch.propTypes = {
  searchBy: PropTypes.func
};
