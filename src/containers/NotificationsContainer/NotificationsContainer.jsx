import { connect } from 'react-redux';

import Notifications from '../../components/Notifications/Notifications';
import * as NotificationActions from '../../actions/Notifications';

export default connect(
  state => ({ notifications: state.notifications, auth: state.auth }),
  NotificationActions
)(Notifications);
