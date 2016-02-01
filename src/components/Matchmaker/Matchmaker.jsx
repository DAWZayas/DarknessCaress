import React, { Component, PropTypes } from 'react';

import { admins } from '../../config/admins';

export default class Matchmaker extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.matchmakingOn();
  }

  componentWillUnmount() {
    this.props.matchmakingOff();
  }

  render() {
    const message = admins.indexOf(this.props.auth.id) === -1 ? 'Log in as admin' : 'Matchmaking...';
    return (
      <div>
        { message }
      </div>
    );
  }

}

Matchmaker.propTypes = {
};
