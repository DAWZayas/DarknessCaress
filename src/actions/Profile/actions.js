import { SET_AVATAR } from './action_types';

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
