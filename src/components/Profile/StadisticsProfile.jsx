import React, { Component, PropTypes } from 'react';

export default class StadisticsProfile extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="status-content">
        <span className="myLvl" >Level {user.level}</span>
        <div className="ranking">
          <span className="myRanking">MMR     <span className="myNumberRanking">  {user.mmr}</span></span>
          <img className="imageRanking" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/star-icon.png"/>
        </div>
        <hr/>
        <div id="stadistics">
          <div>
            <img className="imageStadistics" src="http://www.khwiki.com/images/thumb/1/17/Hades_Cup_Trophy_KH.png/250px-Hades_Cup_Trophy_KH.png"/>
            <p>Victories</p>
            <p>{user.record.victories}</p>
          </div>
            <hr className="hrStadistics"/>
          <div>
            <img className="imageStadistics" src="https://cdn2.iconfinder.com/data/icons/trick-or-treat/512/halloween_8-512.png"/>
            <p>Defeats</p>
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
