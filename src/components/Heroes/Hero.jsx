import React, { Component, PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Button from '../Notifications/Button';

import HeroImage from './HeroImage';

export default class Hero extends Component{

  handleAccept() {

  }



  render(){

    const { key, hero, user } = this.props;
    const avatarImg = <HeroImage hero= {hero} />
    return(
     <Card>
       <CardHeader
         avatar= {avatarImg}
         title={hero.name}
         subtitle={hero.id}
         actAsExpander={true}
         showExpandableButton={true}
         />
        <CardText expandable={true}>
          <ul>
            <li>
              <p>attack: {hero.attack}</p>
            </li>
            <li>
              <p>defense: {hero.defense}</p>
            </li>
            <li>
              <p>special attack: {hero.sp_atk}</p>
            </li>
            <li>
              <p>special defense: {hero.sp_def}</p>
            </li>
            <li>
              <p>movement: {hero.movement}</p>
            </li>
            <li>
              <p>fly: {hero.fly ? 'yes' : 'no'}</p>
            </li>
            <li>
              <p>movement:{user.mmr} objeto</p>
            </li>
          </ul>
          <div>
            <Button text="Buy It!" positive={true} callback={ () => this.handleAccept() }/>
          </div>
        </CardText>
      </Card>
    );
  }
}

Hero.propTypes = {
  key: PropTypes.number,
  hero: PropTypes.object
};
