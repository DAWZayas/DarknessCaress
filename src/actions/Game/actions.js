import { ADD_NEW_BOARD } from './action_types';

import { createBoardWithRiver } from '../../utils/boardGenerator.js';

export function addNewBoard(size, rivers) {
  return (dispatch, getState) => {
    const { firebase, boards } = getState();
    const newBoard = createBoardWithRiver(size, rivers, 'river');
    const newBoardsArray = [newBoard, ...boards];
    firebase.child('boards').set(newBoardsArray);
  };
}
