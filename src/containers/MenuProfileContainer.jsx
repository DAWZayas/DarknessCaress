import { connect } from 'react-redux';
import MenuProfile from '../containers/MenuProfile';
import { changeLogging } from '../actions';
import { pushState } from 'redux-router';


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
)(MenuProfile);
