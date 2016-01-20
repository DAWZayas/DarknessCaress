import { connect } from 'react-redux';

import ProfileTabs from '../../components/Profile/ProfileTabs';
import * as ProfileActions from '../../actions/Profile';

export default connect(
  state => ({ state }),
  ProfileActions
)(ProfileTabs);
