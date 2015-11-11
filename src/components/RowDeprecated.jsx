import React, { Component, PropTypes } from 'react';

import SquareDeprecated from './SquareDeprecated';

export default class RowDeprecated extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { row, turn, onSelectSquare } = this.props;
    return (
      <div>
        <tr>
          {
            row.map ( (square) => <SquareDeprecated key={square.id} turn={turn} onSelectSquare={onSelectSquare} { ...square} /> )
          }
        </tr>
      </div>
    );
  }
}

RowDeprecated.propTypes = {
  row: PropTypes.array.isRequired,
  turn: PropTypes.object,
  onSelectSquare: PropTypes.func
};
