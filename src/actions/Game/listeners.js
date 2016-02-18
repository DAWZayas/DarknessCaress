import { SET_BOARDS, ADD_OVERLAY_ARRAY } from './action_types';
import { getStartState } from '../../utils/turnStateFunctions';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`users/${userId}/myBoards`);
    ref.on('value', snapshot => {
      const promises = (snapshot.val() || []).map( boardId => new Promise(
        resolve => firebase.child(`boards/${boardId}`).on('value', snapshot => {
          const newObject = {};
          const boardSize = snapshot.val().board.length;
          console.log(">>>>>>>>>>>>I've called getStartState");
          const overlayObject = getStartState(boardSize);
          newObject[boardId] = Object.assign({}, snapshot.val(), {overlayObject: overlayObject});
          resolve(newObject)
        })
      ));
      Promise.all(promises).then(function(boards) {
        dispatch({
          type: SET_BOARDS,
          boards
        });
      });
    });
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const ref = firebase.child('users');
    ref.off();
    dispatch({
      type: SET_BOARDS,
      boards: []
    });
  };
}
