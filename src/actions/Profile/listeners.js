import { SET_HEROES } from './action_types';

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
      type: SET_HEROES,
      heroes: []
    });
  };
}
