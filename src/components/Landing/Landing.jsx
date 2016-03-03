import React, { Component } from 'react';

import Introduction from './Introduction';
import Descriptions from './Descriptions';


  require('animate.css/animate.min.css');
  require('socicon/css/socicon.min.css');
  require('mobirise/css/style.css');
  require('mobirise-slider/style.css');
  require('mobirise-gallery/style.css');
  require('mobirise/css/mbr-additional.css');

export default class Landing extends Component {
  render() {
    return (
      <div>
      	<Introduction />
      	<Descriptions />
      </div>
    );
  }
}
