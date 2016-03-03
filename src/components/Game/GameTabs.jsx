import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';
import { Modal, ModalClose } from 'react-modal-bootstrap';

import searchNewGame from '../../actions/Game/actions.js'; //FIXME: How Charles will handle this?

import Game from './Game';
import Spinner from '../Spinner/Spinner';

export default class GameTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      slideIndex: 0,
      isOpen: false
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
    const array = [];
    const myHeroes= this.props.user.heroes ? this.props.user.heroes : array;
    if(myHeroes.length > 5){
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
  } else this.handleOpenClick();
}

  handleCancelClick() {
    this.setState({ isOpen: false });
  }

  handleOpenClick() {
    this.setState({isOpen: true});
  }

  render() {
    const style = {
      slide: {
        padding: 10
      }
    };
    const { isOpen } = this.state;
    const boards = this.props.boards || [];
    const user = this.props.user || {status: 'searching'};
    const admins = [
      'github:10086900',
      'github:12071956',
      'github:10086845',
      'google:117455282037448467157',
      'google:116649049236657564771',
      'google:115675315024314818796'
    ];
    return admins.indexOf(this.props.auth.id) === -1
        ? (
      <Modal isOpen={true}>
          <div className="modal-body">
            <h4>Stop playing with your phone and pay attention to the presentation!!</h4>
          </div>
        </Modal>) :
    this.state.loading ? <div className="loadingIcon"><Spinner /></div> : (
      <div>
      {
      boards.length < 5 ?
      (<div>
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
          <Tab label="New Game" value={'' + boards.length} />
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
          {
            boards.length >= 5 ? '' :
              (<div className="center-block" style={style.slide}>
                {
                  user.status !== 'searching'
                  ? <button type="button" className="btn btn-info" onClick={() => this.onNewGameButtonClick(8, 2)}>Start New Game</button>
                  : <div className="loadingIcon"><Spinner /></div>
                }
              </div>)
          }
        </SwipeableViews>
      </div>)
      :
      (<div>
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
        </SwipeableViews>
      </div>)
      }
      </div>
    );
  }
}

GameTabs.propTypes = {
  boards: PropTypes.array,
  user: PropTypes.object,
  addNewBoard: PropTypes.func,
  updateBoard: PropTypes.func,
  registerListeners: PropTypes.func,
  unregisterListeners: PropTypes.func
};
