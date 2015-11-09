import { connect } from 'react-redux';

import EquipmentList from '../components/EquipmentList';


function mapStateToProps(state) {
  return {
    equipment: state.equipment
  };
}

function mapActionsToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EquipmentList);
