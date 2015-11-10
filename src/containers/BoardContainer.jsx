import { connect } from 'react-redux';

import Board from '../components/Board';

function mapStateToProps(state) {
  return {
    board: state.board
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Board);
