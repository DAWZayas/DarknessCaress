import React, { Component, PropTypes } from 'react';

export default class TurnMenu extends Component {

  constructor(props) {
    super(props);
  }

  handleDeselectButtonClick() {
    this.props.onSelectSquare(-1);
  }

  render() {
    const { turn } = this.props;
    return (
      <div>
        <span  className={turn.selected === -1? '' : 'hidden'}>
          <h3>Select a unit to move</h3>
        </span>
        <span  className={turn.selected === -1? 'hidden' : ''}>
          <h3>Select actions for this unit</h3>
        </span>
        <button className="btn btn-info" type="button" onClick={() => this.handleDeselectButtonClick()}>Deselect Unit</button>
      </div>
    );
  }
}

TurnMenu.propTypes = {
  turn: PropTypes.object,
  onSelectSquare: PropTypes.func
};
