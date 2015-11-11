import React, { Component, PropTypes } from 'react';

import Square from './Square';

export default class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { board, turn, onSelectSquare } = this.props;
    return (
      <div>
        <table className="table table-bordered table-condensed col-md-0.5">
          {
            board.map ( (row) => {
            	return (
            		<tr>
            		{
            			row.map ( (square) => {
            				return (
        							<Square id={ square.id } terrain={ square.terrain } selected={ turn.selected } onSelectSquare={onSelectSquare} />
            				);
            			})
            		}
            		</tr>
            	);
          	})
          }
        </table>
      </div>
    );
  }

}

Board.propTypes = {
  board: PropTypes.array.isRequired,
  turn: PropTypes.object,
  onSelectSquare: PropTypes.func
};
