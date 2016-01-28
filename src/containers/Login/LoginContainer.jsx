import { connect } from 'react-redux';
import Login from '../../components/Login/Login';
import * as authActions from '../../actions/Authenticate';

export default connect(
  state => state.auth,
  authActions
)(Login);
