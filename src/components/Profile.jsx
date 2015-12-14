import React, { Component } from 'react';
import { Avatar, LinearProgress } from 'material-ui';
//import Unit from './Unit';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class Profile extends Component {
  render() {
    return (
      <div id="mainBodyProfile">
        <div id="overlap">
          <img id="avatarHolder" src="http://vignette4.wikia.nocookie.net/cardfight/images/f/fa/Ouroboros.png"/>
          <Avatar src="http://www.feplanet.net/media/buddyicon/7/bartre.gif" size={70} />
        </div>
        <div>
          <p className="profile">Nivel 15</p>
          <LinearProgress id="experienceBar" mode="determinate" value={60} />
        </div>  
        <p>rangosssss (variable.state)</p>
        <div id="principalHeroes">
        <div>
          <img src={`${apiUrl}bulbasaur.gif`} width="80" />
          <p>1st Most used hero: bulbasaur.</p>
        </div>
        <div>
          <img src={`${apiUrl}ivysaur.gif`} width="80" />
          <p>2nd Most used hero: ivysaur.</p>
        </div>
        <div>
          <img src={`${apiUrl}venusaur.gif`} width="80" />
          <p>3th Most used hero: venosaur.</p>
        </div>
        </div>
      </div>
    );
  }
}
