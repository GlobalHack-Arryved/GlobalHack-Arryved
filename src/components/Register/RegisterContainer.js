import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebaseCollection } from '../HOC/Firebase';
import firebase from 'firebase/app';
import 'firebase/auth';
import Register from './Register';

export default compose(
  withNamespaces(),

  withRouter,

  withStateHandlers(
    () => ({
      email: '',
      password: '',
      language: 'NpQ9XL8rj0CnA3No0PDv',
      error: null
    }),

    {
      onEmailChange: () => (e) => ({ email: e.target.value }),
      onPasswordChange: () => (e) => ({ password: e.target.value }),
      onLanguageChange: () => (e) => ({ language: e.target.value }),
      onError: () => (error) => ({ error })
    }
  ),

  withFirebaseCollection(
    () => firebase.firestore().collection('languages'),
    'languages'
  ),

  withHandlers({
    onSubmit: ({ email, password, history, onError }) => async (e) => {
      e.preventDefault();
      
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        history.replace('/register/community');
      } catch (err) {
        onError(err.message);
      }
    }
  })
)(Register);
