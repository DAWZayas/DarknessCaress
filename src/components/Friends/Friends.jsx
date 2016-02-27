import React, { Component, PropTypes } from 'react';

import { FriendDetails } from './FriendDetails';
import Spinner from '../Spinner/Spinner';

export default class Friends extends Component{

	constructor(props){
		super(props);
	}

	handleSearchFriend() {
		const friendId = this.refs.search.value;
		if(friendId !== '') {
			this.props.searchFriend(friendId);
		}
	}

	render(){
		const { friends, friendSearch, addFriend, removeFriend } = this.props;
 		return(
 			<div>
				<input type="text" placeholder="Your friend's name" ref="search" />
				<button onClick={() => this.handleSearchFriend()}>Search</button>
				<div>
 					<span>Searched Friends</span>
 				</div>
 				<div>
 					{
 						friends.map( (friendObject, index) => {
 							return (
 								<button key={index}>{friendObject[Object.keys(friendObject)[0]].username}</button>
 							);
 						})
 					}
 				</div>
 			</div>
    );
	}
}

Friends.propTypes = {
  friends: PropTypes.array,
  friendSearch: PropTypes.object,
  searchFriend: PropTypes.func,
  addFriend: PropTypes.func,
  removeFriend: PropTypes.func
};
