import React, { Component, PropTypes } from 'react';

import Friend from './Friend';

export default class FriendsList extends Component {

  constructor(props) {
    super(props);
  }

  handleAddButtonClick() {
    const { friends, onAddFriendClick } = this.props;
    const newId = friends[friends.length - 1].id + 1;
    const node = this.refs.name;
    const newName = node.value.trim();
    const friend = {
      id: newId,
      name: newName,
      status: 'offline'
    };
    onAddFriendClick(friend);
    node.value = '';
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
        <div className="input-group col-md-3">
          <input type="text" className="form-control" placeholder="Friend Name" ref="name"/>
          <span className="input-group-btn">
            <button className="btn btn-info" type="button" onClick={() => this.handleAddButtonClick()}>Add Friend</button>
          </span>
        </div>
      </div>
    );
  }
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
  onAddFriendClick: PropTypes.func
};
