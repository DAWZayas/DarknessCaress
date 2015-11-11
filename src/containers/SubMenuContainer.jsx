import { connect } from 'react-redux';

import SubMenu from '../components/SubMenu';

function mapStateToProps(state) {
  return {
    turn: state.turn
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SubMenu);
