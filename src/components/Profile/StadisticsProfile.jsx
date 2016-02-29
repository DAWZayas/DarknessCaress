import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class StadisticsProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="status-content">
        <span className="myLvl" >Level: {user.level}</span>
        <div id="stadistics">
          <div>
            <img className="imageStadistics" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png"/>
            <p>MMR: {user.mmr}</p>
          </div>
        <br/><br/>
          <div>
            <img className="imageStadistics" src="http://www.khwiki.com/images/thumb/1/17/Hades_Cup_Trophy_KH.png/250px-Hades_Cup_Trophy_KH.png"/>
            <p>Victories:</p>
            <p>{user.record.victories}</p>
          </div>
          <br/><br/>
          <div>
            <img className="imageStadistics" src="https://cdn2.iconfinder.com/data/icons/trick-or-treat/512/halloween_8-512.png"/>
            <p>Defeats:</p>
            <p>{ user.record.defeats }</p>
          </div>
        </div>
      </div>
    );
  }
}

StadisticsProfile.propTypes = {
  user: PropTypes.object
};
