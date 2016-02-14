import { connect } from 'react-redux';
import injecTapEventPlugin from 'react-tap-event-plugin';

import Nav from '../../components/Nav/Nav';
import * as navActions from '../../actions/Nav';

injecTapEventPlugin();

export default connect(
  state => ({
    auth: state.auth,
    notifications: state.notifications
  }),
  navActions
)(Nav);
