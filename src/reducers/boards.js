import { SET_BOARDS, CHANGE_OVERLAY_ARRAY, UPDATE_BOARD, CHANGE_TURN } from '../actions/Game';

function setBoards(state, boards) {
  return boards;
}

function changeOverlay(state, boardId, overlayObject) {
	return state.map( board => {
		if(Object.keys(board)[0] === boardId) {
			board[`${boardId}`].overlayObject = Object.assign({}, board[`${boardId}`].overlayObject, overlayObject); 
		}
		return board;
	});
}

function updateBoard(state, boardId, newBoard) {
	return state.map( board => {
		if(Object.keys(board)[0] === boardId) {
			board[`${boardId}`].board = newBoard;
		}
		return board;
	});
}

function changeTurn(state, boardId, newBoard) {
	return state.map( board => {
		if(Object.keys(board)[0] === boardId) {
			board[`${boardId}`].turn = board[`${boardId}`].turn === board[`${boardId}`][0] ? board[`${boardId}`][1] : board[`${boardId}`][0];
			board[`${boardId}`].board = newBoard;
		}
		return board;
	});
}

export default function boardsReducer(state = [], action) {
  switch (action.type) {
    case SET_BOARDS:
      return setBoards(state, action.boards);
    case CHANGE_OVERLAY_ARRAY:
    	return changeOverlay(state, action.boardId, action.overlayObject);
    case UPDATE_BOARD:
    	return updateBoard(state, action.boardId, action.newBoard);
    case CHANGE_TURN:
    	return changeTurn(state, action.boardId, action.finalBoard);
    default:
      return state;
    }
}
