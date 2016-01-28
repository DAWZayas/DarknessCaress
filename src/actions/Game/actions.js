import { createBoardWithRiver } from '../../utils/boardGenerator.js';
import { pushState } from 'redux-router';

export const navigate = (path) => pushState(null, path);

export function searchNewGame(userId) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const matchmakingReference = firebase.child('matchmaking');
    matchmakingReference.transaction( matchmaking => {
      const matchmakingArray = matchmaking || [];
      matchmakingArray.push(userId);
      while(matchmakingArray.length > 1) {
        const idOne = matchmakingArray.shift();
        const idTwo = matchmakingArray.shift();
        createNewBoard(idOne, idTwo, firebase);
      }
      return matchmakingArray;
    });
  };
}

function createNewBoard(idOne, idTwo, firebase) {
  const newBoard = createBoardWithRiver(8, 2, 'river');
  const newBoardReference = firebase.child('boards').push(newBoard);
  const newBoardId = newBoardReference.key();
  addBoardToUser(idOne, newBoardId, firebase);
  addBoardToUser(idTwo, newBoardId, firebase);
}

function addBoardToUser(userId, boardId, firebase) {
  firebase.child(`users/${userId}/myBoards`).once('value', snapshot => {
    const oldBoards = snapshot.val() || [];
    firebase.child(`users/${userId}/myBoards`).set([boardId, ...oldBoards]);
  });
}

export function updateBoard(board, boardId) {
	return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`boards/${boardId}`).set(board);
  };
}
