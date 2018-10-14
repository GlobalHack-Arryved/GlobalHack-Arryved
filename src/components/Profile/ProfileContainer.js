import firebase from 'firebase';
import { withNamespaces } from 'react-i18next';
import { withFirebaseDocument } from '../HOC/Firebase';
import { compose } from 'recompose';
import Profile from './Profile';

export default compose(
  withNamespaces(),

  withFirebaseDocument(
    () => firebase.firestore().collection('users').doc(firebase.auth().currentUser.uid),
    'profile'
  )
)(Profile);