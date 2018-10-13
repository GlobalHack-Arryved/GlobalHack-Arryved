import firebase from 'firebase';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import AppNavbar from './AppNavbar';

export default compose(
  withRouter,
  withHandlers({
    onLogout: () => () => firebase.auth().signOut()
  })
)(AppNavbar);