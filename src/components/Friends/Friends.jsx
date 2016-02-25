import React, { Component, PropTypes } from 'react';

import FriendSearch from './FriendSearch';
import FriendsList from './FriendsList';

export default class Friends extends Component{

	constructor(props){
		super(props);
	}

	render(){
		const { friends, searchBy } = this.props;
 		return(
 			<div>
				<FriendSearch searchBy={ searchBy } />
 				<FriendList friends={ friends } />
 			</div>
    );
	}
}

Friends.propTypes = {
  friends: PropTypes.array,
  searchBy: PropTypes.func
};
