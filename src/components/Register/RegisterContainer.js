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
      onLanguageChange: () => (language) => ({ language }),
      onError: () => (error) => ({ error })
    }
  ),

  withFirebaseCollection(
    () => firebase.firestore().collection('languages'),
    'languages'
  ),

  withHandlers({
    onLanguageUpdate: ({ i18n, onLanguageChange }) => async (e) => {
      const selectedLanguageId = e.target.value;
      const db = firebase.firestore();
      const languageRef = db.collection('languages').doc(selectedLanguageId);
      const languageSnapshot = await languageRef.get();
      const { locale, rtl } = languageSnapshot.data();
      i18n.changeLanguage(locale);

      if (rtl) {
        document.body.classList.add('bp3-rtl');
      } else {
        document.body.classList.remove('bp3-rtl');
      }

      onLanguageChange(selectedLanguageId);
    },

    onSubmit: ({ email, password, language, history, onError }) => async (e) => {
      e.preventDefault();
      
      try {
        const db = firebase.firestore();
        const authResult = await firebase.auth().createUserWithEmailAndPassword(email, password);
        const newUserId = authResult.user.uid;
        const profileRef = db.collection('users').doc(newUserId);
        const languageRef = db.collection('languages').doc(language);
        await profileRef.set({ language: languageRef });
        history.replace('/register/community');
      } catch (err) {
        onError(err.message);
      }
    }
  })
)(Register);
