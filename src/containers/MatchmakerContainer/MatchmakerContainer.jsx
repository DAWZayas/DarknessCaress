import { connect } from 'react-redux';

import Matchmaker from '../../components/Matchmaker/Matchmaker';
import * as MatchActions from '../../actions/Matchmaker';

export default connect(
  state => ({ auth: state.auth }),
  MatchActions
)(Matchmaker);
