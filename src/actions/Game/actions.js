import { createBoardWithRiver } from '../../utils/boardGenerator.js';

export function addNewBoard(size, rivers) {
  return (dispatch, getState) => {
    const { firebase, boards } = getState();
    const newBoard = createBoardWithRiver(size, rivers, 'river');
    const newBoardReference = firebase.child('boards').push(newBoard);
    const newBoardId = newBoardReference.key();
    firebase.child('myBoards').once('value', snapshot => {
    	const oldBoards = snapshot.val() || [];
    	firebase.child('myBoards').set([newBoardId, ...oldBoards]);
    });
  };
}

export function updateBoard(board, boardId) {
	return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`boards/${boardId}`).set(board);
  };
}
