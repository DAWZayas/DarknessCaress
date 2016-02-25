import React, { Component, PropTypes } from 'react';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';

export default class Spinner extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      container: {
        position: 'relative'
      },
      refresh: {
        display: 'inline-block',
        position: 'relative',
        fill: 'red'
      },
    };

    return (
      <div style={style.container}>
        <RefreshIndicator size={100} left={50} top={50} status="loading" style={style.refresh} />
      </div>
    );
  }
}
