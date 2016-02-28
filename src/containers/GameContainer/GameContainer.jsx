import { connect } from 'react-redux';

import GameTabs from '../../components/Game/GameTabs';
import * as GameActions from '../../actions/Game';
import * as GameFunctions from '../../utils/turnFunctions';

export default connect(
  state => ({ boards: state.boards,
					  	auth: state.auth,
					  	user: state.user,
					  	opponents: state.opponents,
					  	functions: GameFunctions }),
  GameActions
)(GameTabs);
