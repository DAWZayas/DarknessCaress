import { connect } from 'react-redux';

import ProfileTabs from '../../components/Profile/ProfileTabs';
import * as ProfileActions from '../../actions/Profile';

export default connect(
  state => ({ auth: state.auth, user: state.user }),
  {},
  ProfileActions
)(ProfileTabs);
