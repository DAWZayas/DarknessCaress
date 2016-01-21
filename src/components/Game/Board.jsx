import React, { Component, PropTypes } from 'react';

import Square from './Square';
import { generateOverlayArray } from '../../utils/turnFunctions';

export default class Board extends Component {

  constructor(props) {
    super(props);
    this.state = {
      overlayArray: generateOverlayArray(this.props.board.length)
    };
  }

  render() {
    const { board } = this.props;
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
        						  <Square key={ index2 } position={[index1, index2]} id={ square.id } image={ square.image } color={this.state.overlayArray[index1][index2]} />
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
  board: PropTypes.array.isRequired
};
