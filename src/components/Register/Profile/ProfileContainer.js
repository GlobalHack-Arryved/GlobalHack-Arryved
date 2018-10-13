import { withNamespaces } from 'react-i18next';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import Profile from './Profile';

export default compose(
  withNamespaces(),

  withStateHandlers(
    () => ({
      name: '',
      bio: '',
      error: null
    }),

    {
      onNameChange: () => (e) => ({ name: e.target.value }),
      onBioChange: () => (e) => ({ bio: e.target.value })
    }
  )
)(Profile);
