import React, { Component, PropTypes } from 'react';

import FriendDetails from './FriendDetails';
import Spinner from '../Spinner/Spinner';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Button from './Button';

import { images } from '../../utils/imageProfileExports';

export default class Friends extends Component{

	constructor(props){
		super(props);
	}

	handleSearchFriend() {
		const friendId = this.refs.search.value;
		this.props.searchFriend(friendId);
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
 								<div key={index}>
 								<hr className="profhr" />
 								<Card>
					        <CardHeader
					          avatar={images[friendSearch[friendId].avatar]}
					          title={ "Name: " + friendSearch[friendId].username}
					          subtitle={"Status: " + friendSearch[friendId].status}
					          actAsExpander={true}
					          showExpandableButton={true}
					          />
					        <CardText expandable={true}>
					          <p>{friendSearch[friendId].username}</p>
					          <ul>
					            <li>
					              {"Level: " + friendSearch[friendId].level}
					            </li>
					            <li>
					              {"MMR: " + friendSearch[friendId].mmr}
					            </li>
					          </ul>
					          <div>
					            <Button text="Add Friend" positive={true} callback={ this.props.addFriend } friendId={ friendId } />
					          </div>
					        </CardText>
					      </Card>
 								<hr className="profhr" />
					      </div>
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
