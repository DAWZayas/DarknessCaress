import { connect } from 'react-redux';

import EquipmentList from '../components/EquipmentList';
import { setEquipment } from '../actions';


function mapStateToProps(state) {
  return {
    equipment: state.equipment
  };
}

function mapActionsToProps(dispatch) {
  return {
  	onAddEquipmentClick: equip => dispatch(setEquipment(equip))
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EquipmentList);
