import * as authActions from '../actions/Authenticate';

export const initialState = {
  authenticated: false,
  id: null
};

export default function authReducer(state = initialState, action) {
  const { meta, payload } = action;
  switch (action.type) {
    case authActions.INIT_AUTH:
      const authenticated = payload !== null && (payload.expires * 1000) > meta.timestamp;
      return {
        authenticated,
        id: authenticated ? payload.uid : null
      };
    case authActions.SIGN_IN_SUCCESS:
      return {
        authenticated: true,
        id: payload.uid
      };
    case authActions.SIGN_OUT_SUCCESS:
      return {
        authenticated: false,
        id: null
      };
    default:
      return state;
  }
}
