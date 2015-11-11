import { connect } from 'react-redux';

import Board from '../components/Board';
import { selectSquare } from '../actions';

function mapStateToProps(state) {
  return {
    board: state.board,
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
)(Board);
