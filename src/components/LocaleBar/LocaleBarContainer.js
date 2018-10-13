import { withNamespaces } from 'react-i18next';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import LocaleBar from './LocaleBar';

export default compose(
  withNamespaces(),

  withStateHandlers(
    () => ({
      language: 'en',
      rtl: false
    }),
    {
      onLanguageChange: () => (language) => ({ language }),
      onRtlChange: () => (rtl) => ({ rtl })
    }
  ),

  withHandlers({
    onLanguageUpdate: ({ onLanguageChange, i18n }) => (e) => {
      onLanguageChange(e.target.value);
      i18n.changeLanguage(e.target.value);
    },

    onRtlUpdate: ({ onRtlChange }) => (e) => {
      onRtlChange(e.target.checked);
      if (e.target.checked) document.body.classList.add('bp3-rtl');
      else document.body.classList.remove('bp3-rtl');
    }
  })
)(LocaleBar);