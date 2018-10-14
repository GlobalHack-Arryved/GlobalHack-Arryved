import firebase from 'firebase';
import { withFirebaseCollection, withFirebaseDocument } from '../HOC/Firebase';
import { withNamespaces } from 'react-i18next';
import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import AppNavbar from './AppNavbar';

export default compose(
  withNamespaces(),
  
  withRouter,

  withFirebaseDocument(
    () => firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid),
    'user'
  ),

  withFirebaseCollection(
    () => firebase.firestore().collection('cities'),
    'cities'
  ),

  withHandlers({
    onLogout: () => () => firebase.auth().signOut()
  })
)(AppNavbar);