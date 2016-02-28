import React, { Component, PropTypes } from 'react';

export default class HeroSearch extends Component{
	render(){
		const {user} = this.props;
		return(
			<div className="form-group">
        <input id="heroSearcher" className="form-control" type="text" placeholder="Find your hero" onChange={ this.props.searchBy } />
				<span className="myPoints" >{user.points}</span>
      </div>
    );
	}
}

HeroSearch.propTypes = {
	user: PropTypes.object,
  searchBy: PropTypes.func
};
