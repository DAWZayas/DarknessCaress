import React, { Component, PropTypes } from 'react';

import HeroSearch from './HeroSearch';
import HeroesList from './HeroesList';

export default class Heroes extends Component{

	constructor(props){
		super(props);
	}

	render(){
		const { heroes, searchBy, user } = this.props;
 		return(
 			<div>
				<HeroSearch user = { user } searchBy={ searchBy } />
 				<HeroesList user={ user } heroes={ heroes } searchedHero={this.props.searchedHero} buyHeroe={this.props.buyHeroe} />
 			</div>
    );
	}
}

Heroes.propTypes = {
  heroes: PropTypes.array,
  searchBy: PropTypes.func,
	user: PropTypes.object
};
