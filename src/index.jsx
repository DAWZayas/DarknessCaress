import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root/Root';

import init from './utils/init';

require('./style.css');
require('bootstrap/dist/css/bootstrap.min.css');
global.jQuery = require('jquery/dist/jquery.min.js');
require('bootstrap/dist/js/bootstrap.min.js');
require('smooth-scroll/SmoothScroll.js');
require('jquery-mb-ytplayer/jquery.mb.YTPlayer.min.js');
require('jarallax/jarallax.js');
require('bootstrap-carousel-swipe/bootstrap-carousel-swipe.js');
require('masonry/masonry.pkgd.min.js');
require('imagesloaded/imagesloaded.pkgd.min.js');
require('social-likes/social-likes.js');
require('mobirise/js/script.js');
require('mobirise-gallery/script.js');
require('mobirise-slider/style.css');
require('mobirise-gallery/style.css');
require('mobirise/css/mbr-additional.css');


const store = init();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
