import React, { Component, PropTypes } from 'react';

const apiUrl = 'http://img.pokemondb.net/sprites/black-white/anim/normal/';

export default class StadisticsProfile extends Component {
  render() {
    const { user } = this.props;
    return (
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
    );
  }
}

StadisticsProfile.propTypes = {
  user: PropTypes.object
};
