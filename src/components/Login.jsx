import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';
import injecTapEventPlugin from 'react-tap-event-plugin';
import { Link } from 'react-router';



injecTapEventPlugin();

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

   handleLog(){
    const { loggingState, logging, navigate } = this.props;
    loggingState(logging);
    navigate('profile');
  }

  render() {
    return (
      <div className="log">
        <div> <img className="logoboros" src="http://img14.deviantart.net/b815/i/2012/363/0/5/ouroboros_fma_by_jordanpokemon28-d5pjakh.png"/></div>
        <TextField floatingLabelText="User Name" />
        <TextField floatingLabelText="Password" 
        type="password" />
        <br/>
        <RaisedButton label="Log In" onTouchTap={this.handleLog.bind(this)}/>
        <br/>
        <Link to="/"><span className="titulo">No account yet? Create one</span></Link>
      </div>         
    );
  }
}

Login.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  loggingState: PropTypes.func,
  logging: PropTypes.bool,
  navigate: PropTypes.func
};