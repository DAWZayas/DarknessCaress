import { SET_HEROES, SET_FRIENDS } from './action_types';

export function registerListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`users/${userId}/heroes`);
    ref.on('value', snapshot => {
      const promises = (snapshot.val() || []).map( heroId => new Promise(
        resolve => firebase.child(`heroes/${heroId}`).on('value', snapshot => {
          const heroObject = {};
          heroObject[heroId] = snapshot.val();
          resolve(heroObject)
        })
      ));
      Promise.all(promises).then(function(heroes) {
        dispatch({
          type: SET_HEROES,
          heroes
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

export function registerFriendsListeners() {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    const ref = firebase.child(`users/${userId}/friends`);
    ref.on('value', snapshot => {
      const promises = (snapshot.val() || []).map( friendId => new Promise(
        resolve => firebase.child(`users/${friendId}`).on('value', snapshot => {
          const friendObject = {};
          friendObject[friendId] = snapshot.val();
          resolve(friendObject)
        })
      ));
      Promise.all(promises).then(function(friends) {
        dispatch({
          type: SET_FRIENDS,
          friends
        });
      });
    });
  };
}
