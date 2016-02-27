import { SET_AVATAR, SEARCH_FRIEND } from './action_types';

export function changeAvatar(avatarName, userId) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.child(`users/${auth.id}/avatar`).set(avatarName);
    dispatch({
      type: SET_AVATAR,
      avatar: avatarName
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
				if(users[userId].username.indexOf(username) !== -1) {
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

export function addFriend(userId, friendId) {
	return (dispatch, getState) => {
		const { firebase } = getState();
		firebase.child(`users/${userId}/friends`).transaction(snapshot => {
			const friends = snapshot.val() || [];
			return [...friends, friendId];
		}, () => {}, false);
	};
}

export function removeFriend(userId, friendId) {
	return (dispatch, getState) => {
		const { firebase } = getState();
		firebase.child(`users/${userId}/friends`).transaction(snapshot => {
			const friends = snapshot.val() || [];
			return friends.filter(id => id !== friendId);
		}, () => {}, false);
	};
}
