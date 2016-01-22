import { connect } from 'react-redux';
import ChangePassword from '../components/ChangePassword';
import { pushState } from 'redux-router';
import { changeLogging } from '../actions';


function mapStateToProps(state) {
  return {
    friends: state.friends,
    logging: state.logging                 
  };
}

function mapActionsToProps(dispatch) {
  return {
    navigate: (path) => dispatch(pushState(null, path)),
    loggingState: () => dispatch(changeLogging())
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(ChangePassword);