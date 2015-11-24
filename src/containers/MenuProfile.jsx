import React, { Component, PropTypes } from 'react';
import injecTapEventPlugin from 'react-tap-event-plugin';
import Online from  '../components/Online';
import Offline from  '../components/Offline';


injecTapEventPlugin();

export default class MenuProfile extends Component {



  constructor(props) {
    super(props);
  }

  render() {
    const { navigate, logging, loggingState } = this.props;
    let log;
    if(logging===true) {
      log = <Online loggingState={loggingState} navigate={navigate} logging={logging} />;
    }else{
      log = <Offline loggingState={loggingState} navigate={navigate} logging={logging} />;
    }
    return (
      <span>
      {log}
      </span>
    );
  }
}

MenuProfile.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  logging: PropTypes.bool,
  navigate: PropTypes.func,
  loggingState: PropTypes.func
};
