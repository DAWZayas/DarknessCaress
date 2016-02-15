import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App/App';
import GameContainer from './containers/GameContainer/GameContainer';
import ProfileContainer from './containers/ProfileContainer/ProfileContainer';
import LoginContainer from './containers/LoginContainer/LoginContainer';
import Landing from './components/Landing/Landing';
import NotificationsContainer from './containers/Notifications/NotificationsContainer';
import MatchmakerContainer from './containers/MatchmakerContainer/MatchmakerContainer';

export default (
  <Route path="/" component={App}>
  	<Route path="game" component={GameContainer} />
    <Route path="profile" component={ProfileContainer} />
    <Route path="login" component={LoginContainer} />
    <Route path="create" component={LoginContainer} />
    <Route path="change" component={LoginContainer} />
    <Route path="notifications" component={NotificationsContainer} />
    <Route path="riverness-rivers" component={MatchmakerContainer} />
  	<Redirect path="*" to="/" />
    <IndexRoute component={Landing} />
  </Route>
);
