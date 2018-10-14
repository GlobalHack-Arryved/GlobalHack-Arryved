import firebase from 'firebase';
import { withNamespaces } from 'react-i18next';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebaseCollection } from '../HOC/Firebase';
import LocaleBar from './LocaleBar';

export default compose(
  withNamespaces(),

  withFirebaseCollection(
    () => firebase.firestore().collection('languages'),
    'languages'
  ),

  withStateHandlers(
    () => ({
      language: 'en',
      rtl: false,
      open: false
    }),
    {
      onLanguageChange: () => (language) => ({ language }),
      onRtlChange: () => (rtl) => ({ rtl }),
      onToggleOpen: ({ open }) => () => ({ open: !open })
    }
  ),

  withHandlers({
    onRtlUpdate: ({ onRtlChange }) => (e) => {
      onRtlChange(e.target.checked);
      if (e.target.checked) document.body.classList.add('bp3-rtl');
      else document.body.classList.remove('bp3-rtl');
    }
  }),

  withHandlers({
    onLanguageUpdate: ({ languages, i18n, onRtlUpdate, onLanguageChange }) => (e) => {
      const [{ rtl }] = languages.data.filter(l => l.locale === e.target.value);
      onLanguageChange(e.target.value);
      onRtlUpdate({ target: { checked: rtl } });
      i18n.changeLanguage(e.target.value);
    }
  })
)(LocaleBar);