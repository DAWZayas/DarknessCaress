import { connect } from 'react-redux';

import FriendsList from '../components/FriendsList';


function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(FriendsList);
