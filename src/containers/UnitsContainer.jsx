import { connect } from 'react-redux';

import UnitsList from '../components/UnitsList';
import { setUnit } from '../actions';


function mapStateToProps(state) {
  return {
    units: state.units
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onAddUnitClick: equip => dispatch(setUnit(equip))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UnitsList);
