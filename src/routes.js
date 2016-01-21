import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import App from './containers/App';
import GameContainer from './containers/GameContainer';
import TabContainer from './containers/TabContainer';
import UnitsContainer from './containers/UnitsContainer';
import UnitDetailContainer from './containers/UnitDetailContainer';
import EquipmentContainer from './containers/EquipmentContainer';
import FriendsContainer from './containers/FriendsContainer';
import Landing from './components/Landing';
import LoginContainer from './containers/LoginContainer';

export default (
  <Route path="/" component={App}>
    <Route path="game" component={GameContainer} />
    <Route path="Login" component={LoginContainer} />
    <Route path="profile" component={TabContainer} />
    <Route path="units" component={UnitsContainer} />
    <Route path="units/:name" component={UnitDetailContainer} />
    <Route path="equipment" component={EquipmentContainer} />
    <Route path="friends" component={FriendsContainer} />
    <Redirect path="*" to="/" />
    <Redirect path="github" to="https://github.com" />
    <IndexRoute component={Landing} />
  </Route>
);
