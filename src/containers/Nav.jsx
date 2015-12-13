import React, { Component, PropTypes } from 'react';
import { LeftNav, AppBar} from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import injecTapEventPlugin from 'react-tap-event-plugin';
import MenuDivider from 'material-ui/lib/menus/menu-divider';
import MenuProfile from './MenuProfile';
import Title from '../components/Title';

injecTapEventPlugin();

export default class Nav extends Component {

  constructor(props) {
    super(props);
  }

  handleClick() {
    this.refs.leftNav.toggle();// Show/Hide the Menu
  }

  handleTouchTap(e){
    const { navigate } = this.props;
    const path = e.target.innerHTML.toLowerCase();
    path === 'github'
      ? window.location.assign('https://github.com/DAWZayas/DarknessCaress')
      : path ==='follow us :)'
        ? window.location.assign('https://twitter.com/Darkness_Caress') 
        : navigate(path);
    this.refs.leftNav.toggle();
  }

  render() {
    const { navigate, logging, loggingState } = this.props;
    return (
      <nav>
        <LeftNav id="mainNav" ref="leftNav" docked={false} header={<div id="headerNav">DarknessCaress</div>} disableSwipeToOpen>
          <MenuItem primaryText="Home" onTouchTap={this.handleTouchTap.bind(this)} />
          {
            logging === true ? <MenuItem primaryText="Game" onTouchTap={this.handleTouchTap.bind(this)} /> : ''
          }
          <MenuDivider />
          <MenuItem primaryText="GitHub" onTouchTap={this.handleTouchTap.bind(this)} />
          <MenuItem primaryText="Follow Us :)" onTouchTap={this.handleTouchTap.bind(this)} />
        </LeftNav>
        <AppBar title={<Title logging={logging} navigate={navigate} />} onLeftIconButtonTouchTap={this.handleClick.bind(this) } iconElementRight={<MenuProfile navigate={navigate} logging={logging} loggingState={loggingState} />} />
      {this.props.children}
      </nav>
    );
  }
}

Nav.propTypes = {
  // Injected by React Router
  children: PropTypes.node,
  navigate: PropTypes.func,
  logging: PropTypes.bool,
  loggingState: PropTypes.func
};
