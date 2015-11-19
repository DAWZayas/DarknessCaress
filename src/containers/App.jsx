import { connect } from 'react-redux';
import { pushState } from 'redux-router';

import Nav from '../components/Nav';

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

function mapActionsToProps(dispatch) {
  return {
    navigate: (path) => dispatch(pushState(null, path))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Nav);
