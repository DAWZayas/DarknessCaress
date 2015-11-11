import React, { Component, PropTypes } from 'react';

import RowDeprecated from './RowDeprecated';

export default class BoardDeprecated extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { board, turn, onSelectSquare } = this.props;
    return (
      <div>
        <table className="table table-bordered table-condensed">
          {
            board.map ( (row) => <RowDeprecated row={ row } turn={turn} onSelectSquare={onSelectSquare} /> )
          }
        </table>
      </div>
    );
  }
}

BoardDeprecated.propTypes = {
  board: PropTypes.array.isRequired,
  turn: PropTypes.object,
  onSelectSquare: PropTypes.func
};
