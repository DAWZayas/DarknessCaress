import { pushState } from 'redux-router';

export const navigate = (path) => pushState(null, path);
