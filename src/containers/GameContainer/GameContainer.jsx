import { connect } from 'react-redux';

import GameTabs from '../../components/Game/GameTabs';
import * as GameActions from '../../actions/Game';

export default connect(
  state => ({ boards: state.boards }),
  GameActions
)(GameTabs);
