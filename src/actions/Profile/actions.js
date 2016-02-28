import { pushState } from 'redux-router';

import { SET_AVATAR, SEARCH_FRIEND, BUY_HEROE } from './action_types';

export const navigate = (path) => pushState(null, path);

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

export function searchFriend(username) {
	return (dispatch, getState) => {
		const { firebase } = getState();
		firebase.child('users').once('value', snapshot => {
			const users = snapshot.val();
			const usersFound = {};
			Object.keys(users).map( userId => {
				if(users[userId].username === username) {
					usersFound[userId] = users[userId];
				}
			});
			dispatch({
				type: SEARCH_FRIEND,
				users: usersFound
			});
		});
	};
}

export function addFriend(friendId) {
	return (dispatch, getState) => {
  	const { firebase, auth } = getState();
    const userId = auth.id;
		firebase.child(`users/${userId}/friends`).transaction(snapshot => {
			const friends = snapshot || [];
			return [...friends, friendId];
		}, () => {}, false);
	};
}

export function removeFriend(friendId) {
	return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
		firebase.child(`users/${userId}/friends`).transaction(snapshot => {
			const friends = snapshot || [];
			return friends.filter(id => id !== friendId);
		}, () => {}, false);
	};
}

export function sendGameNotification(friendId) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    const userId = auth.id;
    firebase.child(`users/${friendId}/notifications`).push({
      "type": "gameSolicitation",
      "userId": userId
    });
  }
}
