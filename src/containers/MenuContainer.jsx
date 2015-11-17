import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';
import EquipmentContainer from './EquipmentContainer';
import FriendsContainer from './FriendsContainer';
import UnitsContainer from './UnitsContainer';

injecTapEventPlugin();

export default class MenuContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabs>
        <Tab label="Equipment">
          <EquipmentContainer />
        </Tab>
        <Tab label="Characters">
          <UnitsContainer />
        </Tab>
         <Tab label="Friends">
         <FriendsContainer />
        </Tab>
      </Tabs>
    );
  }
}

MenuContainer.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};
