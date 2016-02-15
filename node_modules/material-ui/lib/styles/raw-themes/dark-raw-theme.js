'use strict';

var Colors = require('../colors');
var ColorManipulator = require('../../utils/color-manipulator');
var Spacing = require('../spacing');

/*
 *  Light Theme is the default theme used in material-ui. It is guaranteed to
 *  have all theme variables needed for every component. Variables not defined
 *  in a custom theme will default to these values.
 */

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.grey800,
    primary2Color: Colors.grey800,
    primary3Color: Colors.bluegrey700,
    accent1Color: Colors.lightblue500,
    accent2Color: Colors.lightblue500,
    accent3Color: Colors.pink500,
    textColor: Colors.white,
    alternateTextColor: Colors.black,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
  }
};
