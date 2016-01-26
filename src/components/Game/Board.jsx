import React, { Component, PropTypes } from 'react';

import Square from './Square';

export default class Board extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { board, selectSquare, turn } = this.props;
    return (
      <div>
        <table className="customTable">
        <tbody>
          {
            board.map ( (row, index1) => {
            	return (
            		<tr key={ index1 }>
            		{
            			row.map ( (square, index2) => {
            				return (
        						  <Square key={ index2 } position={[index1, index2]} id={ square.id } image={ square.image } color={this.props.overlayArray[index1][index2]} { ...this.props } />
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
  overlayArray: PropTypes.array,
  selectSquare: PropTypes.func,
  turn: PropTypes.string
};
