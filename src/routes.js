import React from 'react';
import { Route, Redirect } from 'react-router';

import App from './containers/App';
import GameContainer from './containers/GameContainer';
import MenuContainer from './containers/MenuContainer';
import UnitsContainer from './containers/UnitsContainer';
import EquipmentContainer from './containers/EquipmentContainer';
import FriendsContainer from './containers/FriendsContainer';

export default (
  <Route path="/" component={App}>
    <Route path="game" component={GameContainer} />
    <Route path="profile" component={MenuContainer} />
    <Route path="units" component={UnitsContainer} />
    <Route path="equipment" component={EquipmentContainer} />
    <Route path="friends" component={FriendsContainer} />
    <Redirect path="*" to="/" />
  </Route>
);
