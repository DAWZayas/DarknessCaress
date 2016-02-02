'use strict';

import React from 'react';

const DefaultDecorators = [
  {
    component: React.createClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0)}
            onClick={this.props.previousSlide}>&lt;</button>
        );
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer'
        };
      }
    }),
    position: 'CenterLeft'
  },
  {
    component: React.createClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount)}
            onClick={this.props.nextSlide}>&gt;</button>
        );
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0.4)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
          cursor: 'pointer'
        };
      }
    }),
    position: 'CenterRight'
  }
];

export default DefaultDecorators;
