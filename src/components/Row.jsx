import React, { Component, PropTypes } from 'react';

import Square from './Square';

export default class Row extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { row } = this.props;
    return (
      <div>
        <tr>
          {
            row.map ( (square) => <Square key={square.id} { ...square} /> )
          }
        </tr>
      </div>
    );
  }
}

Row.propTypes = {
  row: PropTypes.array.isRequired
};
