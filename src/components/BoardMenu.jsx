import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import injecTapEventPlugin from 'react-tap-event-plugin';

import Board from './Board';

injecTapEventPlugin();

export default class BoardMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0 //doesn't work if you change it to 1 or 2, but should work (?)
    };
  }

  handleChangeIndex(index) {
    this.props.onSelectSquare([-1, -1], index);
    this.setState({
      slideIndex: index
    });
  }

  handleChangeTabs(value) {
    this.props.onSelectSquare([-1, -1], parseInt(value, 10));
    this.setState({
      slideIndex: parseInt(value, 10)
    });
  }

  onNewGameButtonClick() {
    const { onAddBoard } = this.props;
    onAddBoard();
    this.setState({
      slideIndex: 0
    });
    this.forceUpdate();
  }

  render() {
    const style = {
      slide: {
        padding: 10
      }
    };
    const { boards, onSelectSquare } = this.props;

    return (
      <div className="board-component">
      {
      boards.length < 5 ?
      (<div>
      <Tabs className="tabbedTabs" onChange={this.handleChangeTabs.bind(this)} value={this.state.slideIndex + ''}>
        {
          boards.map( (board, index) => {
            const newValue = '' + index;
            const newLabel = 'Game ' + (index + 1);
            return (
              <Tab key={index} label={newLabel} value={newValue} />
            );
          })
        }
        <Tab label="New Game" value={'' + boards.length} />
      </Tabs>
      <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChangeIndex.bind(this)}>
        {
          boards.map( (board, index) => {
            return (
              <div className="board-component" key={index} style={style.slide}>
                <Board index={index} board={board} onSelectSquare={onSelectSquare} />
              </div>
            );
          })
        }
        {
          boards.length >= 5 ? '' :
            (<div className="board-component center-block" style={style.slide}>
              <button type="button" className="btn btn-info" onClick={() => this.onNewGameButtonClick()}>Start New Game</button>
            </div>)
        }
      </SwipeableViews>
      </div>)
      :
      (<div>
      <Tabs className="tabbedTabs" onChange={this.handleChangeTabs.bind(this)} value={this.state.slideIndex + ''}>
        {
          boards.map( (board, index) => {
            const newValue = '' + index;
            const newLabel = 'Game ' + (index + 1);
            return (
              <Tab key={index} label={newLabel} value={newValue} />
            );
          })
        }
      </Tabs>
      <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChangeIndex.bind(this)}>
        {
          boards.map( (board, index) => {
            return (
              <div className="board-component" key={index} style={style.slide}>
                <Board index={index} board={board} onSelectSquare={onSelectSquare} />
              </div>
            );
          })
        }
      </SwipeableViews>
      </div>)
      }
      </div>
    );
  }
}

BoardMenu.propTypes = {
  boards: PropTypes.array.isRequired,
  onSelectSquare: PropTypes.func,
  onAddBoard: PropTypes.func
};
