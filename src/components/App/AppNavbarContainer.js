import firebase from 'firebase';
import { withNamespaces } from 'react-i18next';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import AppNavbar from './AppNavbar';

export default compose(
  withNamespaces(),
  withRouter,
  withHandlers({
    onLogout: () => () => firebase.auth().signOut()
  })
)(AppNavbar);