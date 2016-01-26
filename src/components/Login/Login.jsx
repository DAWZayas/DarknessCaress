import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {

  render() {
    const { signInWithGithub, signInWithGoogle, signInWithTwitter } = this.props;
    return (
      <div className="row">
        <div className="col-md-6">
          <h1>Sign in</h1>
          <button className="btn" onClick={signInWithGithub}>GitHub</button>
          <button disabled className="btn" onClick={signInWithGoogle}>Google</button>
          <button disabled className="btn" onClick={signInWithTwitter}>Twitter</button>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};
