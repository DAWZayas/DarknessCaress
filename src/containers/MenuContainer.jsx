import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class MenuContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          <h3>All the info of the game</h3>
          {this.props.children}
        </div>
        <li className={'list-group-item action-element'} >
        <div className="row">
          <div className="col-lg-1">
            <Link to="/game">Game</Link>
          </div>
          <div className="col-lg-1">
            <Link to="/units">Units</Link>
          </div>
          <div className="col-lg-1">
            <Link to="/equipment">Equipment</Link>
          </div>
          <div className="col-lg-1">
            <Link to="/friends">Friends</Link>
          </div>
        </div>
        </li>
      </div>
    );
  }
}

MenuContainer.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};
