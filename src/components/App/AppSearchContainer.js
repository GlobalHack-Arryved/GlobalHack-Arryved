import { compose } from 'recompose';
import { withNamespaces } from 'react-i18next';
import firebase from 'firebase';
import { withFirebaseCollection } from '../HOC/Firebase';
import AppSearch from './AppSearch';

export default compose(
  withNamespaces(),

  withFirebaseCollection(
    () => firebase.firestore().collection('categories'),
    'categories'
  ),
)(AppSearch);