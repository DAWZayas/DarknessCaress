import React from 'react';
import { Route, Redirect } from 'react-router';

import App from './containers/App';
import BoardContainer from './containers/BoardContainer';
import UnitsContainer from './containers/UnitsContainer';
import EquipmentContainer from './containers/EquipmentContainer';
import FriendsContainer from './containers/FriendsContainer';

export default (
  <Route path="/" component={App}>
    <Route path="/game" component={BoardContainer} />
    <Route path="/units" component={UnitsContainer} />
    <Route path="/equipment" component={EquipmentContainer} />
    <Route path="/friends" component={FriendsContainer} />
    <Redirect path="*" to="/" />
  </Route>
);
