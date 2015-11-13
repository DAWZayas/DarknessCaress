import { SET_EQUIPMENT } from '../actions';

function setEquipment(state, equipment) {
  return state.slice().concat(equipment);
}

export default function equipmentReducer(state = [], action) {
	switch (action.type) {
  	case SET_EQUIPMENT:
  		return setEquipment(state, action.equipment);
  	default:
  		return state;
  }
}
