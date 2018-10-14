import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import firebase from 'firebase/app';
import 'firebase/auth';
import Login from './Login';

export default compose(
  withNamespaces(),

  withRouter,

  withStateHandlers(
    () => ({
      email: '',
      password: '',
      error: null
    }),

    {
      onEmailChange: () => (e) => ({ email: e.target.value }),
      onPasswordChange: () => (e) => ({ password: e.target.value }),
      onError: () => (error) => ({ error })
    }
  ),

  withHandlers({
    onSubmit: ({ email, password, history, onError }) => async (e) => {
      e.preventDefault();
      
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        history.replace('/categories');
      } catch (err) {
        onError(err.message);
      }
    }
  })
)(Login);
