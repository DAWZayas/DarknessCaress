import { SET_BOARDS } from './action_types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('boards');

    ref.on('value', snapshot => dispatch({
      type: SET_BOARDS,
      boards: snapshot.val()
    }));
  };
}

export function unregisterListeners() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    const ref = firebase.child('boards');
    ref.off();
    dispatch({
      type: SET_BOARDS,
      boards: []
    });
  };
}
