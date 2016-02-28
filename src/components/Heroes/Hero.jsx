import React, { Component, PropTypes } from 'react';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Button from '../Notifications/Button';
import Snackbar from 'material-ui/lib/snackbar';
import RaisedButton from 'material-ui/lib/raised-button';

import HeroImage from './HeroImage';

export default class Hero extends Component{

  constructor(props) {
  super(props);
  this.state = {
    open: false,
  };
}
  handleAccept(hero) {
    if(this.props.user.points < 3){
      this.handleTouchTap();
    }else{
    this.props.buyHeroe(hero);
    }
  }

  handleTouchTap(){
    this.setState({
      open: true,
    });
  };
  handleRequestClose(){
    this.setState({
      open: false,
    });
  };

  render(){

    const { key, hero, user } = this.props;
    const avatarImg = <HeroImage hero= {hero} />
    const array = [];
    const heroWasAcquired = user.heroes ? user.heroes.filter(myHero => myHero === hero.name) : array;
    return(
      <div>
        <Snackbar open={this.state.open} message="you dont have enough points" autoHideDuration={4000} onRequestClose={this.handleRequestClose} />
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
              <p>movement: {hero.range[1]}</p>
            </li>
          </ul>
          <div>
            {heroWasAcquired.length > 0 ? (<RaisedButton label="you have this heroe" disabled={true}  />) : (<Button text="Buy It!" positive={true} callback={ () => this.handleAccept(hero) }/>)}
          </div>
        </CardText>
      </Card>
    </div>
    );
  }
}

Hero.propTypes = {
  key: PropTypes.number,
  hero: PropTypes.object
};
