import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import * as navActions from '../../actions/Nav';

export default connect(
  state => ({ auth: state.auth }),
  navActions
)(Nav);
