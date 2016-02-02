import React, { Component, PropTypes } from 'react';

import HeroSearch from './HeroSearch';
import HeroesList from './HeroesList';

export default class Heroes extends Component{

	constructor(props){
		super(props);
	}

	render(){
		const { heroes, searchBy } = this.props;
 		return(
 			<div>
				<HeroSearch searchBy={ searchBy } />
 				<HeroesList heroes={ heroes } />
 			</div>
    );
	}
}

Heroes.propTypes = {
  heroes: PropTypes.array,
  searchBy: PropTypes.func
};
