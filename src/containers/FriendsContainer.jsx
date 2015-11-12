import { connect } from 'react-redux';

import FriendsList from '../components/FriendsList';
import { setFriend } from '../actions';

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onAddFriendClick: (friend) => dispatch(setFriend(friend))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FriendsList);
