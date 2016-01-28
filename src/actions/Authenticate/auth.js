import { INIT_AUTH, SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action_types';
import { pushState } from 'redux-router';
import { userTemplate } from '../../utils/userTemplate';

export const navigate = (path) => pushState(null, path);

export function createUser(email, password) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.createUser({
      email, password
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        firebase.child(`users/${userData.uid}`).set(userTemplate);
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }
}

export function authenticateWithPassword(email, password) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.authWithPassword({
      email, password
    }, function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        dispatch(pushState(null, '/'));
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: authData,
          meta: {
            timestamp: Date.now()
          }
        });
      }
    });
  }
}

export function changeEmail(oldEmail, newEmail, password) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.changeEmail({
      oldEmail, newEmail, password
    }, function(error) {
      if (error === null) {
        console.log("Email changed successfully");
      } else {
        console.log("Error changing email:", error);
      }
    });
  }
}

export function changePassword(email, oldPassword, newPassword) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.changePassword({
      email, oldPassword, newPassword
    }, function(error) {
      if (error === null) {
        console.log("Password changed successfully");
      } else {
        console.log("Error changing password:", error);
      }
    });
  }
}

export function recoverPassword(email) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.resetPassword({
      email
    }, function(error) {
      if (error === null) {
        console.log("Password reset email sent successfully");
      } else {
        console.log("Error sending password reset email:", error);
      }
    });
  }
}

export function authenticate(provider) {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.authWithOAuthPopup(provider, (error, authData) => {
      if (error) {
        console.error('ERROR @ authWithOAuthPopup :', error);
      }
      else {
        firebase.child('users').once("value", function(snapshot) {
          if(snapshot.child(`${authData.uid}`).exists() === false) {
            firebase.child(`users/${authData.uid}`).set(userTemplate);
          }
        });
        dispatch(pushState(null, '/'));
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: authData,
          meta: {
            timestamp: Date.now()
          }
        });
      }
    });
  };
}

export function initAuth() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    dispatch({
      type: INIT_AUTH,
      payload: firebase.getAuth(),
      meta: {
        timestamp: Date.now()
      }
    });
  };
}
/*
export function signOut() {
  return (dispatch, getState) => {
    const { firebase } = getState();
    firebase.unauth();
    dispatch({
      type: SIGN_OUT_SUCCESS
    });
  };
}
*/
export function cancelSignIn() {
  return dispatch => {
    return dispatch(pushState(null, '/'));
  };
}
