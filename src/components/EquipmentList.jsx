import React, { Component, PropTypes } from 'react';

import Equipment from './Equipment';

export default class EquipmentList extends Component {

  constructor(props) {
    super(props);
  }

  handleAddButtonClick() {
    const { equipment, onAddEquipmentClick } = this.props;
    const newId = equipment[equipment.length - 1].id + 1;
    const node = this.refs.name;
    const names = node.value.trim().split(' ');
    const equip = {
      id: newId,
      name: names[0],
      damage: names[1],
      durability: names[2]
    };
    onAddEquipmentClick(equip);
    node.value = '';
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
        <div className="input-group col-md-3">
          <input type="text" className="form-control" placeholder="Input: name damage durability" ref="name"/>
          <span className="input-group-btn">
            <button className="btn btn-info" type="button" onClick={() => this.handleAddButtonClick()}>Add Equipment</button>
          </span>
        </div>
      </div>
    );
  }
}

EquipmentList.propTypes = {
  equipment: PropTypes.array.isRequired,
  onAddEquipmentClick: PropTypes.func
};
