import React, { Component, PropTypes } from 'react';

import Unit from './Unit';

export default class UnitsList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { units } = this.props;
    return (
      <div>
        <h3>Units</h3>
        <ul>
          {
            units.map ((unit) => <Unit key={unit.id} {...unit} />)
          }
        </ul>
      </div>
    );
  }
}

UnitsList.propTypes = {
  units: PropTypes.array.isRequired
};
