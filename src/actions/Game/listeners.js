import { SET_BOARD, SET_BOARDS, SET_OPPONENTS, ADD_OVERLAY_ARRAY } from './action_types';
import { getStartState } from '../../utils/turnStateFunctions';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`users/${userId}/myBoards`);
    ref.on('value', snapshot => {
      const promises = (snapshot.val() || []).map( boardId => new Promise(
        resolve => firebase.child(`boards/${boardId}`).on('value', snapshot => {
          if(snapshot.exists()) {
            const newObject = {};
            const boardSize = snapshot.val().board.length;
            const overlayObject = getStartState(boardSize);
            newObject[boardId] = Object.assign({}, snapshot.val(), {overlayObject: overlayObject});
            resolve(newObject);
          }
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
    firebase.child('users').off();
    firebase.child('boards').off();
    dispatch({
      type: SET_BOARDS,
      boards: []
    });
  };
}

export function registerGameListeners(boardId) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.child(`boards/${boardId}`).on('value', snapshot => {
      const newObject = {};
      const boardSize = snapshot.val().board.length;
      const overlayObject = getStartState(boardSize);
      newObject[boardId] = Object.assign({}, snapshot.val(), {overlayObject: overlayObject});
      dispatch({
        type: 'SET_BOARD',
        board: newObject,
        id: boardId
      });
    });
  };
}

export function registerOpponentsListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`users/${userId}/myBoards`);
    ref.on('value', snapshot => {
      const promises = (snapshot.val() || []).map( boardId => new Promise(
        resolve => firebase.child(`boards/${boardId}`).on('value', snapshot => {
          if(snapshot.exists()) {
            const opponentId = snapshot.val()[0] === userId ? snapshot.val()[1] : snapshot.val()[0];
            firebase.child(`users/${opponentId}/username`).once('value', snapshot => {
              const opponentName = snapshot.val();
              let opponentObject = {};
              opponentObject[boardId] = opponentName;
              resolve(opponentObject);
            });
          }
        })
      ));
      Promise.all(promises).then(function(opponents) {
        let opponentsObject = {};
        opponents.map( opponent => opponentsObject = Object.assign({}, opponentsObject, opponent));
        dispatch({
          type: SET_OPPONENTS,
          opponents: opponentsObject
        });
      });
    });
  };
}
