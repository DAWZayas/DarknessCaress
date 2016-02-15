import { connect } from 'react-redux';

import ProfileTabs from '../../components/Profile/ProfileTabs';

export default connect(
  state => ({ auth: state.auth, user: state.user }),
  {}
)(ProfileTabs);
