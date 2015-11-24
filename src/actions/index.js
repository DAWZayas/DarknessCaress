export const SET_FRIEND = 'SET_FRIEND';
export const REMOVE_FRIEND = 'REMOVE_FRIEND';
export const SET_UNIT = 'SET_UNIT';
export const REMOVE_UNIT = 'REMOVE_UNIT';
export const SET_EQUIPMENT = 'SET_EQUIPMENT';
export const REMOVE_EQUIPMENT = 'REMOVE_EQUIPMENT';
export const SELECT_SQUARE = 'SELECT_SQUARE';
export const CHANGE_LOGGING = 'CHANGE_LOGGING';

export function setFriend(friend) {
	return { type: SET_FRIEND, friend};
}

export function removeFriend(friend) {
	return { type: REMOVE_FRIEND, friend};
}

export function setUnit(unit) {
	return { type: SET_UNIT, unit};
}

export function removeUnit(unit) {
	return { type: REMOVE_UNIT, unit};
}

export function setEquipment(equipment) {
	return { type: SET_EQUIPMENT, equipment};
}

export function removeEquipment(equipment) {
	return { type: REMOVE_EQUIPMENT, equipment};
}

export function selectSquare(id) {
	return { type: SELECT_SQUARE, id};
}

export function changeLogging() {
	return { type: CHANGE_LOGGING };
}
