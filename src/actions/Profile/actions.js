import { SET_AVATAR, BUY_HEROE } from './action_types';


export function changeAvatar(avatarName) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId=auth.id;
    firebase.child(`users/${userId}/avatar`).set(avatarName);
    dispatch({
      type: SET_AVATAR,
      avatar: avatarName
    });
  }
}

export function buyHeroe(hero) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId=auth.id;
    const array = [];
    const arrayHero = firebase.child(`users/${userId}/heroes`).on('value', snapshot => {
        snapshot.val() ? array.push(hero): snapshot.val();
    });
    console.log(hero);
    const myHeroes = firebase.child(`users/${userId}/heroes`).set(arrayHero);
    dispatch({
      type: BUY_HEROE,
      hero: myHeroes
    });
  }
}
export function buyHeroe(hero) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId=auth.id;
    firebase.child(`users/${userId}`).transaction(user =>{
      let array = [];
      const pointPerHeroe = 3;
        if(user.heroes){
          const heroes = user.heroes;
          heroes.push(hero);
          firebase.child(`users/${userId}/heroes`).set(heroes);
          const newPoints = user.points - pointPerHeroe;
          firebase.child(`users/${userId}/points`).set(newPoints);
          dispatch({
            type: BUY_HEROE,
            hero: heroes,
            points: newPoints
          });
        }else {
          array.push(hero);
          firebase.child(`users/${userId}/heroes`).set(array);
          const newPoints = user.points - pointPerHeroe;
          firebase.child(`users/${userId}/points`).set(newPoints);
          dispatch({
            type: BUY_HEROE,
            hero: array,
            points: newPoints
          });
        }
    });
  }
}
