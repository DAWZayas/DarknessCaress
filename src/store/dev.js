import { createStore, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import reducer from '../reducers';
import routes from '../routes';
import thunk from 'redux-thunk';
import DevTools from '../containers/Root/DevTools';
import createLogger from 'redux-logger';

import { FIREBASE_URL } from '../config';
import Firebase from 'firebase';
import { initAuth } from '../actions/Authenticate/auth';

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger()),
  DevTools.instrument()
)(createStore);

export default function configureStore(initialState) {

  const store = createStoreWithMiddleware(reducer, initialState || { firebase: new Firebase(FIREBASE_URL) });

  store.dispatch(initAuth());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
