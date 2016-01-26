import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import * as NavActions from '../../actions/Authenticate';

export default connect(
  state => ({ auth: state.auth }),
  NavActions
)(Nav);
