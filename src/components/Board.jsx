import React, { Component, PropTypes } from 'react';

import Row from './Row';

export default class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { board } = this.props;
    return (
      <div>
        <table className="table table-bordered table-condensed">
          {
            board.map ( (row) => <Row row={ row } /> )
          }
        </table>
      </div>
    );
  }
}

Board.propTypes = {
  board: PropTypes.array.isRequired
};
