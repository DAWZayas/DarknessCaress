import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import IconButton from 'material-ui/lib/icon-button';
import injecTapEventPlugin from 'react-tap-event-plugin';

injecTapEventPlugin();

export default class Title extends Component {

  constructor(props) {
    super(props);
  }

  handleTouchTap(){
    const { navigate } = this.props;
    const path = 'game';
    navigate(path);
  }

  render() {
    return (
      <div>
        <Link to="/">Darkness Caress</Link>
        <span onClick={this.handleTouchTap.bind(this)}>
          <IconButton iconClassName="material-icons" id="playButton" >videogame_asset</IconButton> 
        </span>
      </div>
    );
  }
}

Title.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  navigate: PropTypes.func
};
