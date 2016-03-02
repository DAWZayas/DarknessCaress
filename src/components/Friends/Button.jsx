import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';2

export default class Button extends Component{

  handleInteraction(friendId){
    this.props.callback(friendId)
  }
  render(){
    const { text, positive, friendId} = this.props;
    const color = positive ? '#00BCD4' : '#DE1A27';
    const style = {
      margin: 12,
    };
    return(
      <RaisedButton backgroundColor={color} label={text} style={style} onClick={ this.handleInteraction.bind(this, friendId) }/>
    )
  }
}

Button.propTypes = {
  positive: PropTypes.bool,
  text: PropTypes.string,
  callback : PropTypes.func,
  friendId : PropTypes.string
}
