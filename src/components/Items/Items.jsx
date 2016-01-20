import React, { Component, PropTypes } from 'react';

import ItemSearch from './ItemSearch';
import ItemList from './ItemList';

export default class Items extends Component{

	constructor(props){
		super(props);
	}

	render(){
		const {items, searchBy} = this.props;
 		return(
 			<div>
 				<ItemSearch searchBy={searchBy} />
 				<ItemList items={items} />
 			</div>
    );    
	}
}

Items.propTypes = {
  items: PropTypes.array,
  searchBy: PropTypes.func
};
