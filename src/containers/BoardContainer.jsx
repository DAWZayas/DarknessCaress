import { connect } from 'react-redux';

import BoardMenu from '../components/BoardMenu';
import { selectSquare, addNewBoard } from '../actions';

function mapStateToProps(state) {
  return {
    boards: state.board,
    turn: state.turn
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onSelectSquare: id => dispatch(selectSquare(id)),
  	onAddBoard: () => dispatch(addNewBoard())
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BoardMenu);
