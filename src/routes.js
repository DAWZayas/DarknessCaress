import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App/App';
import GameContainer from './containers/GameContainer/GameContainer';
import ProfileContainer from './containers/ProfileContainer/ProfileContainer';
import Landing from './components/Landing/Landing';

export default (
  <Route path="/" component={App}>
  	<Route path="game" component={GameContainer} />
    <Route path="profile" component={ProfileContainer} />
  	<Redirect path="*" to="/" />
    <IndexRoute component={Landing} />
  </Route>
);
