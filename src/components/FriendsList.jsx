import React, { Component, PropTypes } from 'react';

import Friend from './Friend';

export default class FriendsList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { friends } = this.props;
    return (
      <div>
        <h3>Current Friends (make more)</h3>
        <ul>
          {
            friends.map ((friend) => <Friend key={friend.id} {...friend} />)
          }
        </ul>
      </div>
    );
  }
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired
};
