import React, { Component, PropTypes } from 'react';
import { TextField, RaisedButton } from 'material-ui';

export default class Login extends Component {

  constructor(props) {
    super(props);
  }

  handleLogIn() {
    const email = this.refs.email.getValue();
    const password = this.refs.password.getValue();
    this.props.authenticateWithPassword(email, password);
  }

  handleChangePassword() {
    const email = this.refs.email.getValue();
    const password = this.refs.password.getValue();
    const newPassword = this.refs.newPassword.getValue();
    this.props.newPassword(email, password, newPassword);
    this.props.navigate('login');
  }

  handleCreateAccount() {
    const email = this.refs.email.getValue();
    const password = this.refs.password.getValue();
    const username = this.refs.username.getValue();
    this.props.createUser(email, password, username);
    this.props.navigate('login');
  }

  render() {
    return (
      <div className="log">
        {
          this.props.route.path === 'change'
          ? (
            <div>
              <TextField ref="email" floatingLabelText="Email" />
              <TextField ref="password" floatingLabelText="Password" type="password" />
              <TextField ref="newPassword" floatingLabelText="Repeat password" type="password" />
            </div>
          )
          : this.props.route.path === 'create'
            ? (
              <div>
                <TextField ref="email" floatingLabelText="Email" />
                <TextField ref="password" floatingLabelText="Password" type="password" />
                <TextField ref="username" floatingLabelText="Username" type="text" />
              </div>
            )
            : (
              <div>
                <TextField ref="email" floatingLabelText="Email" />
                <TextField ref="password" floatingLabelText="Password" type="password" />
              </div>
              )
        }
        <br/>
        {
          this.props.route.path === 'change'
          ? (
            <div>
              <RaisedButton  secondary={true} label="Change My Password" onTouchTap={this.handleChangePassword.bind(this)}/>
              <br/>
              <span onClick={() => this.props.navigate('login')}>Already have an account?</span>
              <br/>
              <span onClick={() => this.props.navigate('create')}>No account yet? Create one</span>
            </div>
          )
          : this.props.route.path === 'create'
          ? (
            <div>
              <RaisedButton  secondary={true} label="Register" onTouchTap={this.handleCreateAccount.bind(this)}/>
              <br/>
              <span onClick={() => this.props.navigate('login')}>Already have an account?</span>
            </div>
          )
          : (
            <div>
              <RaisedButton secondary={true} label="Log In" onTouchTap={this.handleLogIn.bind(this)}/>
              <br/>
              <span onClick={() => this.props.navigate('create')}>No account yet? Create one</span>
              <br/>
              <span onClick={() => this.props.navigate('change')}>Forgot your password?</span>
            </div>
          )
        }
        <RaisedButton  secondary={true} label="Github" onTouchTap={this.props.authenticate.bind(this, 'github')}/>
        <RaisedButton secondary={true} label="Google" onTouchTap={this.props.authenticate.bind(this, 'google')}/>
      </div>
    );
  }
}

Login.propTypes = {
  authenticate: PropTypes.func,
  authenticateWithPassword: PropTypes.func,
  newPassword: PropTypes.func,
  createUser: PropTypes.func,
  navigate: PropTypes.func
};
