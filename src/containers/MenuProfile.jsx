import React, { Component, PropTypes } from 'react';
import injecTapEventPlugin from 'react-tap-event-plugin';
import Online from  '../components/Online';
import Offline from  '../components/Offline';


injecTapEventPlugin();

export default class MenuProfile extends Component {



  constructor(props) {
    super(props);
  }
  handleTouchTap(e){
    const { navigate } = this.props;
    const path = e.target.innerHTML.toLowerCase();
    navigate(path);
  }

  render() {
    const { navigate } = this.props;
    const { logging } = this.props;
    
    return (
       {logging} ? <Online  navigate={navigate} /> : <Offline  navigate={navigate} />
      );
  }
}

MenuProfile.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  logging: PropTypes.bool,
  navigate: PropTypes.func
};
