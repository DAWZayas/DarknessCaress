import React, { Component, PropTypes } from 'react';

import Square from './Square';

export default class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { board, onSelectSquare, index } = this.props;
    let key = 0;
    return (
      <div>
        <table className="customTable">
        <tbody>
          {
            board.map ( (row, index1) => {
            	return (
            		<tr key={ key++ }>
            		{
            			row.map ( (square, index2) => {
            				return (
        							<Square key={ square.id } position={[index1, index2]} index={index} id={ square.id } image={ square.image } onSelectSquare={onSelectSquare} />
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
  onSelectSquare: PropTypes.func,
  index: PropTypes.number
};
