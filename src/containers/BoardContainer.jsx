import { connect } from 'react-redux';

import BoardMenu from '../components/BoardMenu';
import { selectSquare, addNewBoard } from '../actions';

function mapStateToProps(state) {
  return {
    boards: state.board
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onSelectSquare: (position, index) => dispatch(selectSquare(position, index)),
  	onAddBoard: () => dispatch(addNewBoard())
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BoardMenu);
