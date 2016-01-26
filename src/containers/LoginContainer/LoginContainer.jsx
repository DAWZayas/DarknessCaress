import { connect } from 'react-redux';

import Login from '../../components/Login/Login';
import * as AuthActions from '../../actions/Authenticate';

export default connect(
  state => ({ state }),
  AuthActions
)(Login);
