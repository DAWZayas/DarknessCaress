import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class StadisticsProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="status-content">
        <div id="stadistics">
          <div>
            <img/>
            <p>MMR: { user.mmr }</p>
          </div>
          <div>
            <img className="imageStadistics" src="https://cdn2.iconfinder.com/data/icons/trick-or-treat/512/halloween_8-512.png"/>
            <p>Victory:</p>
            <p>{ user.record.victories }</p>
          </div>
          <div>
            <img className="imageStadistics" src="https://cdn2.iconfinder.com/data/icons/trick-or-treat/512/halloween_8-512.png"/>
            <p>Defeats:</p>
            <p>{ user.record.defeats }</p>
          </div>
          <div>
            <img className="imageStadistics" src="https://cdn2.iconfinder.com/data/icons/trick-or-treat/512/halloween_8-512.png"/>
            <p>Ties:</p>
            <p>{ user.record.ties }</p>
          </div>
        </div>
      </div>
    );
  }
}

StadisticsProfile.propTypes = {
  user: PropTypes.object
};
