import { connect } from 'react-redux';

import GameTabs from '../../components/Game/GameTabs';
import turnFunctionHandler from '../../components/Game/turnFunctionHandler';
import * as GameActions from '../../actions/Game';

export default connect(
  state => ({ boards: state.boards, auth: state.auth, user: state.user }),
  GameActions
)(turnFunctionHandler);
