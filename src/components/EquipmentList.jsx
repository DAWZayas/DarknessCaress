import React, { Component, PropTypes } from 'react';

import Equipment from './Equipment';

export default class EquipmentList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { equipment } = this.props;
    return (
      <div>
        <h3>Equipment</h3>
        <ul>
          {
            equipment.map ((equipment) => <Equipment key={equipment.id} {...equipment} />)
          }
        </ul>
      </div>
    );
  }
}

EquipmentList.propTypes = {
  equipment: PropTypes.array.isRequired
};
