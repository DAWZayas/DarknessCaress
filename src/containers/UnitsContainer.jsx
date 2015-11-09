import { connect } from 'react-redux';

import UnitsList from '../components/UnitsList';


function mapStateToProps(state) {
  return {
    units: state.units
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UnitsList);
