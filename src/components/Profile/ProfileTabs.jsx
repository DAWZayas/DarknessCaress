import React, { Component, PropTypes } from 'react';
import { Tabs, Tab } from 'material-ui';
import SwipeableViews from 'react-swipeable-views';

import Heroes from '../Heroes/Heroes';
import Profile from './Profile';
import Items from '../Items/Items';

import { allItems } from '../../utils/allItems';
import { allHeroes } from '../../utils/allHeroes';

export default class ProfileTabs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0, //doesn't work if you change it to 1 or 2, but should work (?)
      searchedHero: '',
      searchedItem: ''
    };
  }
  componentWillMount() {
    if(this.props.auth.authenticated === false) {
      this.props.navigate('/');
    }
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

  searchByHero(input){
    this.setState({searchedHero: input.target.value});
    this.forceUpdate();
  }

  searchByItem(input){
    this.setState({searchedItem: input.target.value});
    this.forceUpdate();
  }

  render() {
    const style = {
      slide: {
        padding: 10
      }
    };

    const items = allItems.filter( item => item.name.search(this.state.searchedItem.toLowerCase()) > -1 );
    const heroes = allHeroes.filter( hero => hero.image.search(this.state.searchedHero.toLowerCase()) > -1 );
    const { user } = this.props;
    return !user ? <span>calgando</span> : (
      <div>
        <Tabs className="tabbedTabs" onChange={ this.handleChangeTabs.bind(this) } value={ this.state.slideIndex + '' }>
          <Tab label="Profile" value="0" />
          <Tab label="Heroes" value="1" />
          <Tab label="Items" value="2" />
        </Tabs>
        <SwipeableViews index={ this.state.slideIndex } onChangeIndex={ this.handleChangeIndex.bind(this) }>
          <div style={ style.slide }>
            <Profile changeAvatar={this.props.changeAvatar} user={ user } />
          </div>
          <div style={ style.slide }>
            <Heroes heroes={ heroes } user={ user } searchBy={ this.searchByHero.bind(this) } />
          </div>
          <div style={ style.slide }>
            <Items items={ items } searchBy={ this.searchByItem.bind(this) } />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

ProfileTabs.PropTypes={
  user: PropTypes.object,
  registerListeners: PropTypes.func,
  unregisterListeners: PropTypes.func,

};
