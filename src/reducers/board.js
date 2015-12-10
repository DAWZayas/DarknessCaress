import { ADD_NEW_BOARD } from '../actions';

import { createBoardWithRiver } from '../utils/everything.js';
//import { randomNumber, shuffle } from '../utils/generalFunctions';
//import { riverCreator, applyRivers } from '../utils/riverEngine.js';
//import { terrains } from '../utils/initialState';

function addBoard(state) {
	const newBoard = createBoardWithRiver(8, 2, 'river');
  return [newBoard, ...state];
}

export default function equipmentReducer(state = [], action) {
	switch (action.type) {
  	case ADD_NEW_BOARD:
  		return addBoard(state);
  	default:
  		return state;
  }
}
