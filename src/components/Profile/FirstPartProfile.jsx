import React, { Component, PropTypes } from 'react';
import { Avatar, LinearProgress } from 'material-ui';
import IconButton from 'material-ui/lib/icon-button';
import AvatarPerfil from './AvatarPerfil';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

export default class FirstPartProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen(){
    this.setState({
      open: true
    });
  }

  handleClose(){
    this.setState({
      open: false
    });
  }

  render() {
  const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];
    const { user } = this.props;
    return (
      <div>
        <div className="overlap">
          <IconButton onTouchTap={this.handleOpen} >
            <AvatarPerfil />
          </IconButton>
        </div>
        <Dialog title="Dialog With Actions" actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
          The actions in this window were passed in as an array of React objects.
        </Dialog>
        <div>
          <p className="profile">level {user.level} </p>
          <LinearProgress id="experienceBar" mode="determinate" value={user.exp} />
        </div>
      </div>
    );
  }
}

FirstPartProfile.propTypes = {
  user: PropTypes.object
};
