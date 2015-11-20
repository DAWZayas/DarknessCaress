import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import IconButton from 'material-ui/lib/icon-button';
import injecTapEventPlugin from 'react-tap-event-plugin';

injecTapEventPlugin();

export default class Title extends Component {

  constructor(props) {
    super(props);
  }
    handleTouchTap(e){
    const { navigate } = this.props;
    const path = e.target.innerHTML.toLowerCase();
    navigate(path);
  }
  render() {
    return (
      <div>
        <Link to="/">Darkness Caress</Link>
        <IconButton onTouchTap={this.handleTouchTap.bind(this)} iconClassName="material-icons" id="playButton" >videogame_asset</IconButton> // must be the summ of the left brother width and half of the property size below.
      </div>
    );
  }
}
Nav.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  navigate: PropTypes.func
};