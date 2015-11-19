import React, { Component } from 'react';
import IconButton from 'material-ui/lib/icon-button';
import injecTapEventPlugin from 'react-tap-event-plugin';


injecTapEventPlugin();

export default class GameButton extends Component {

  constructor(props) {
    super(props);
}

  render() {
   
    return (
      <IconButton iconClassName="material-icons" id="playButton" >videogame_asset</IconButton> // must be the summ of the left brother width and half of the property size below.
    );
  }
}
