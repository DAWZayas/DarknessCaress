import React, { Component, PropTypes } from 'react';

import FriendDetails from './FriendDetails';
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
		const { friends, friendSearch, addFriend, removeFriend, sendGameNotification } = this.props;
 		return(
 			<div>
				<input className="form-control" type="text" ref="search" placeholder="Your friend's name" onChange={ this.handleSearchFriend.bind(this) } />
				<div>
 					{
 						Object.keys(friendSearch).map( (friendId, index) => {
 							return (
 								<p key={index}>{friendSearch[friendId].username}</p>
 							);
 						})
 					}
 				</div>
 				<div>
 					{
 						friends.map( (friend, index) => {
 							return (
 								<FriendDetails key={ index } friend={ friend } removeFriend={ removeFriend } sendGameNotification={ sendGameNotification } />
 							);
 						})
 					}
					<div className="height_fixer"></div>
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
  removeFriend: PropTypes.func,
	sendGameNotification: PropTypes.func
};
