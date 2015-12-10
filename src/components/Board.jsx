import React, { Component, PropTypes } from 'react';

import Square from './Square';

export default class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { board, turn, onSelectSquare } = this.props;
    let key = 0;
    return (
      <div>
        <table className="customTable">
        <tbody>
          {
            board.map ( (row) => {
            	return (
            		<tr key={ key++ }>
            		{
            			row.map ( (square) => {
            				return (
        							<Square key={ square.id } id={ square.id } image={ square.image } selected={ turn.selected } onSelectSquare={onSelectSquare} />
            				);
            			})
            		}
            		</tr>
            	);
          	})
          }
        </tbody>
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
