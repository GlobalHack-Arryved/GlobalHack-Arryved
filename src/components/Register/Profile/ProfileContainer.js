import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import firebase from 'firebase';
import Profile from './Profile';

export default compose(
  withRouter,

  withNamespaces(),

  withStateHandlers(
    () => ({
      name: '',
      bio: '',
      error: null
    }),

    {
      onNameChange: () => (e) => ({ name: e.target.value }),
      onBioChange: () => (e) => ({ bio: e.target.value }),
      onError: () => (error) => ({ error })
    }
  ),

  withHandlers({
    onSubmit: ({ name, bio, history, onError }) => async (e) => {
      e.preventDefault();
      
      try {
        const auth = firebase.auth();
        const db = firebase.firestore();
        const userRef = db.collection('users').doc(auth.currentUser.uid);

        await userRef.set({
          name,
          bio
        }, {
          merge: true
        });

        history.push('/');
      } catch (err) {
        onError(err.message);
        console.log(err.message);
      }
    }
  })
)(Profile);
