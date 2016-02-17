import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Button extends Component{
  render(){
    const { text, positive } = this.props;
    const color = positive ? '#00BCD4' : '#FF4081';
    const style = {
      margin: 12,
    };
    return(
      <RaisedButton backgroundColor={color} label={text} style={style} onMouseDown={this.props.callback} onTouchEnd={this.props.callback}/>
    )
  }
}

Button.propTypes = {
  positive: PropTypes.bool,
  text: PropTypes.string,
  callback : PropTypes.func
}
