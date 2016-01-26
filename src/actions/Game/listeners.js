import { SET_BOARDS } from './action_types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('myBoards');
    ref.on('value', snapshot => {
      const promises = (snapshot.val() || []).map( boardId => new Promise(
        resolve => firebase.child(`boards/${boardId}`).on('value', snapshot => {
          const newObject = {};
          const newKey = boardId;
          newObject[newKey] = snapshot.val();
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
    const { firebase } = getState();
    const ref = firebase.child('myBoards');
    ref.off();
    dispatch({
      type: SET_BOARDS,
      boards: []
    });
  };
}
