import React, { Component, PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Button from './Button';


export default class FriendDetails extends Component{

	constructor(props){
		super(props);
	}


	render(){
		const { friend } = this.props;
		const friendId = Object.keys(friend)[0];
		const friendProfile = friend[friendId];
		const { avatar, username, status, level, mmr } = friendProfile
 		return(
			<Card>
        <CardHeader
          avatar={avatar}
          title={ "Nombre: "+username}
          subtitle={"Estado: "+status}
          actAsExpander={true}
          showExpandableButton={true}
          />
        <CardText expandable={true}>
          <p>{username}</p>
          <ul>
            <li>
              {"Nivel: "+level}
            </li>
            <li>
              {"MMR: "+mmr}
            </li>
          </ul>
          <div>
            <Button text="Jugar" positive={true} callback={ this.props.sendGameNotification } friendId={ friendId } />
            <Button text="Borrar" positive={false} callback={ this.props.removeFriend } friendId={ friendId } />
          </div>
        </CardText>
      </Card>
    );
	}
}

FriendDetails.propTypes = {
	userId: PropTypes.string,
  friend: PropTypes.object,
  removeFriend: PropTypes.func,
	sendGameNotification: PropTypes.func
};
