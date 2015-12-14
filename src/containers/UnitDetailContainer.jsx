import { connect } from 'react-redux';

import UnitDetail from '../components/UnitDetail';
import { allUnits } from '../utils/allUnits';

function mapStateToProps(state) {
  const pokeName = state.router.params.name;
  const pokemon = allUnits.filter(pkmn => pkmn.name === pokeName)[0];
  return { pokemon, pokeName };
}

function mapDispatchToProps() {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnitDetail);
