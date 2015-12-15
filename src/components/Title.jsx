import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
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
        <Link to="/"><span className="titulo">Darkness Caress</span></Link>
        
      </div>
    );
  }
}

Title.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  navigate: PropTypes.func,
  logging: PropTypes.bool
};
