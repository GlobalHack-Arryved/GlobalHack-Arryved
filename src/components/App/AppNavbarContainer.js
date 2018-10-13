import firebase from 'firebase';
import { withFirebaseCollection } from '../HOC/Firebase';
import { withNamespaces } from 'react-i18next';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import AppNavbar from './AppNavbar';

export default compose(
  withNamespaces(),
  
  withRouter,

  withFirebaseCollection(
    () => firebase.firestore().collection('cities'),
    'cities'
  ),

  withHandlers({
    onLogout: () => () => firebase.auth().signOut()
  })
)(AppNavbar);