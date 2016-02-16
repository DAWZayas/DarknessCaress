import { SET_AVATAR } from './action_types';

export function changeAvatar(avatarName, userId ) {
  return (dispatch, getState) => {
    const { firebase, auth } = getState();
    firebase.child(`users/${auth.id}/avatar`).set(avatarName);
    dispatch({
      type: SET_AVATAR,
      avatar: avatarName
    });
  }
}
