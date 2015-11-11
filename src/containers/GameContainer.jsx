import React, { Component, PropTypes } from 'react';

import BoardContainer from './BoardContainer';
import SubMenuContainer from './SubMenuContainer';

export default class GameContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<div>
      		<BoardContainer />
      	</div>
      	<div>
      		<SubMenuContainer />
      	</div>
        {this.props.children}
      </div>
    );
  }
}

GameContainer.propTypes = {
  // Injected by React Router
  children: PropTypes.node
};
