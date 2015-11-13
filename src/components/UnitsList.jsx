import React, { Component, PropTypes } from 'react';

import Unit from './Unit';

export default class UnitsList extends Component {

  constructor(props) {
    super(props);
  }

  handleAddButtonClick() {
    const { units, onAddUnitClick } = this.props;
    const newId = units[units.length - 1].id + 1;
    const node = this.refs.name;
    const values = node.value.trim().split(' ');
    const unit = {
      id: newId,
      type: values[0],
      hp: values[1],
      mp: values[2],
      movement: values[3]
    };
    onAddUnitClick(unit);
    node.value = '';
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
        <div className="input-group col-md-3">
          <input type="text" className="form-control" placeholder="Input: name HP MP movement" ref="name"/>
          <span className="input-group-btn">
            <button className="btn btn-info" type="button" onClick={() => this.handleAddButtonClick()}>Add Unit</button>
          </span>
        </div>
      </div>
    );
  }
}

UnitsList.propTypes = {
  units: PropTypes.array.isRequired,
  onAddUnitClick: PropTypes.func
};
