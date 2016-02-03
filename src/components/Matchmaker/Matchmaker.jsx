import React, { Component, PropTypes } from 'react';

import { admins } from '../../config/admins';

export default class Matchmaker extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    if(admins.indexOf(this.props.auth.id) === -1) {
      this.props.navigate('login');
    }else{
      this.props.matchmakingOn();
    }
  }

  componentWillUnmount() {
    this.props.matchmakingOff();
  }

  render() {
    return (
      <h1>
        Matchmaking....
      </h1>
    );
  }

}

Matchmaker.propTypes = {
  auth: PropTypes.object,
  navigate: PropTypes.func,
  matchmakingOn: PropTypes.func,
  matchmakingOff: PropTypes.func
};
