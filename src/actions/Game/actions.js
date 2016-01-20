import { ADD_NEW_BOARD } from './action_types';

import { createBoardWithRiver } from '../../utils/boardGenerator.js';

export function addNewBoard() {
  return (dispatch, getState) => {
    const { firebase, boards } = getState();
    const newBoard = createBoardWithRiver(8, 2, 'river');
    const newBoardsArray = [newBoard, ...boards];
    firebase.child('boards').set(newBoardsArray);
  };
}
