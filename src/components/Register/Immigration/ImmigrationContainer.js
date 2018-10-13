import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import firebase from 'firebase';
import { withFirebaseCollection } from '../../HOC/Firebase';
import Immigration from './Immigration';

export default compose(
  withRouter,

  withNamespaces(),

  withFirebaseCollection(
    () => firebase.firestore().collection('visas'),
    'visas'
  ),

  withStateHandlers(
    () => ({
      immigrationStatus: '',
      visaType: '',
      error: null
    }),
    {
      onImmigrationStatusChange: () => (e) => ({ immigrationStatus: e.target.value }),
      onVisaTypeChange: () => (e) => ({ visaType: e.target.value }),
      onError: () => (error) => ({ error })
    }
  ),

  withHandlers({
    onSubmit: ({ immigrationStatus, visaType, onError, history }) => async (e) => {
      e.preventDefault();

      const auth = firebase.auth();
      const db = firebase.firestore();
      const userRef = db.collection('users').doc(auth.currentUser.uid);
      const visaRef = db.collection('visas').doc(visaType);

      try {
        await userRef.set({
          immigrationStatus,
          visaType: visaRef
        }, {
          merge: true
        });

        history.replace('/');
      } catch (err) {
        onError(err);
      }
    }
  })
)(Immigration);
