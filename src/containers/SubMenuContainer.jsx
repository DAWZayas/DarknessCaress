import { connect } from 'react-redux';

import SubMenu from '../components/SubMenu';
import { selectSquare } from '../actions';

function mapStateToProps(state) {
  return {
    turn: state.turn
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onSelectSquare: id => dispatch(selectSquare(id))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SubMenu);
