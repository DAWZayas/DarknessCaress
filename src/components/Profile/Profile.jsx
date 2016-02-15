import React, { Component, PropTypes } from 'react';
import { Avatar, LinearProgress } from 'material-ui';
import StadisticsProfile from './StadisticsProfile';
import FirstPartProfile from './FirstPartProfile';


export default class Profile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div id="mainBodyProfile">
        <h2>user.name</h2>
        <FirstPartProfile user= {user} />
        <StadisticsProfile user= {user}/>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object
};
