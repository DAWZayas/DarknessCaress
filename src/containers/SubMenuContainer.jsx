import { connect } from 'react-redux';

import SubMenu from '../components/SubMenu';
import { selectSquare } from '../actions';

function mapStateToProps(state) {
  return {
    turn: state.turn,
    boards: state.board
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onSelectSquare: (position, index) => dispatch(selectSquare(position, index))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(SubMenu);
