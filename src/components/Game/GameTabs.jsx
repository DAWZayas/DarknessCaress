import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';

import searchNewGame from '../../actions/Game/actions.js'; //FIXME: How Charles will handle this?

import Game from './Game';
import Spinner from '../Spinner/Spinner';

export default class GameTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      slideIndex: 0 //doesn't work if you change it to 1 or 2, but should work (?)
    };
  }

  componentWillMount() {
    if(this.props.auth.authenticated === false) {
      this.props.navigate('/');
    }
    this.props.registerListeners();
    this.props.registerOpponentsListeners();
  }

  componentWillUnmount() {
    this.props.unregisterListeners();
  }

  componentWillReceiveProps(nextProps) {
    nextProps.boards !== this.props.boards
    ? this.setState({
        loading: false
      })
    : null;
  }

  handleChangeIndex(index) {
    this.setState({
      slideIndex: index
    });
  }

  handleChangeTabs(value) {
    this.setState({
      slideIndex: parseInt(value, 10)
    });
  }

  onNewGameButtonClick(size, rivers) {
    const userId = this.props.auth.id;
    const firebase = new Firebase('https://darkness-caress.firebaseio.com');
    firebase.child('matchmaking').once('value', snapshot => {
      if(!snapshot.val()) {
        firebase.child('matchmaking').push(userId);
      }else{
        const matchmakingObject = snapshot.val();
        const firstKey = Object.keys(matchmakingObject)[0];
        const opponent = matchmakingObject[firstKey];
        firebase.child(`users/${opponent}/notifications`).push({
          "type": "gameSolicitation",
          "userId": userId
        });
        firebase.child(`matchmaking/${firstKey}`).remove();
      }
    });
    firebase.child(`users/${userId}/status`).set('searching');
    this.setState({
      slideIndex: 0
    });
  }

  render() {
    const style = {
      slide: {
        padding: 10
      }
    };
    const boards = this.props.boards || [];
    const user = this.props.user || {status: 'searching'};
    return this.state.loading ? <div className="loadingIcon"><Spinner /></div> : (
      <div>
      <div>
        <Tabs onChange={this.handleChangeTabs.bind(this)} value={this.state.slideIndex + ''}>
          {
            boards.map( (boardObject, index) => {
              const newValue = '' + index;
              const newLabel = 'Game ' + (index + 1);
              return (
                <Tab key={index} label={newLabel} value={newValue} />
              );
            })
          }
          { boards.length < 5 ? <Tab label="New Game" value={'' + boards.length} /> : null }
        </Tabs>
        <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChangeIndex.bind(this)}>
          {
            boards.map( (boardObject, index) => {
              const boardId = Object.keys(boardObject)[0];
              return (
                <div className="board-component" key={index} style={style.slide}>
                  <Game className="game" boardObject={boardObject[`${boardId}`]} board={boardObject[`${boardId}`].board} boardId={boardId} { ...this.props } />
                </div>
              );
            })
          }
          { boards.length < 5 ? 
            <div className="center-block" style={style.slide}>
              {
                user.status !== 'searching'
                ? <button type="button" className="btn btn-info" onClick={() => this.onNewGameButtonClick(8, 2)}>Start New Game</button>
                : <div className="loadingIcon"><Spinner /></div>
              }
            </div> : null
          }
        </SwipeableViews>
      </div>
      </div>
    );
  }
}

GameTabs.propTypes = {
  boards: PropTypes.array,
  addNewBoard: PropTypes.func,
  updateBoard: PropTypes.func,
  registerListeners: PropTypes.func,
  unregisterListeners: PropTypes.func
};
