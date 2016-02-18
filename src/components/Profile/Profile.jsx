import React, { Component, PropTypes } from 'react';
import { Avatar, LinearProgress } from 'material-ui';
import StadisticsProfile from './StadisticsProfile';
import FirstPartProfile from './FirstPartProfile';


export default class Profile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div id="mainBodyProfile">
        <div id="backroundProfile">
          <h2>{user.username}</h2>
        </div>
        <FirstPartProfile changeAvatar={this.props.changeAvatar} user= {user} />
        <StadisticsProfile user= {user}/>
      </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object
};
