import React, { Component, PropTypes } from 'react';
import { Avatar, LinearProgress } from 'material-ui';
//import Unit from './Unit';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class Profile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div id="mainBodyProfile">
        <div id="overlap">
          <img id="avatarHolder" src="http://vignette4.wikia.nocookie.net/cardfight/images/f/fa/Ouroboros.png"/>
          <Avatar src="http://www.feplanet.net/media/buddyicon/7/bartre.gif" size={70} />
        </div>
        <div>
          <p className="profile">level {user.level} </p>
          <LinearProgress id="experienceBar" mode="determinate" value={user.exp} />
        </div>
      <div className="status-content">
        <div id="principalHeroes">
        <div>
          <img src={`${apiUrl}bulbasaur.gif`} width="80" />
          <p>1st Most used hero: bulbasaur.</p>
        </div>
        <div>
          <img src={`${apiUrl}ivysaur.gif`} width="80" />
          <p>2nd Most used hero: ivysaur.</p>
        </div>
        </div>
        <div id="stadistics">
          <h3>Stadistics: </h3>
          <div>
            <img/>
            <p>MMR: {user.mmr}</p>
          </div>
          <div>
            <img/>
            <p>Victory: {user.record.victories}</p>
          </div>
          <div>
            <img/>
            <p>Defeats: {user.record.defeats}</p>
          </div>
          <div>
            <img/>
            <p>Ties: {user.record.ties}</p>
          </div>
        </div>
        </div>
    </div>
    );
  }
}

Profile.propTypes = {
  user: PropTypes.object
};
