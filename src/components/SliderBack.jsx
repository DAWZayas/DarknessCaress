import React, Component, PropTypes from 'react';

export default class SliderBack extends Component {
  render(){
    const { PATH } = 'Path To Back Img';
    const unit = this.props;
    return(
      <img src={`${PATH}${unit}.formato`} />
    );
  }
}
 SliderBack.PropTypes = {
   unit: PropTypes.array
 };
