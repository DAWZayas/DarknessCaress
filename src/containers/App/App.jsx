import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';
import * as NavActions from '../../actions/Nav';

export default connect(
  state => ({ state }),
  NavActions
)(Nav);
