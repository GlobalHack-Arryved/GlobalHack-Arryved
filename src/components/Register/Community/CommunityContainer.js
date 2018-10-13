import firebase from 'firebase';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { withFirebaseCollection } from '../../HOC/Firebase';
import Community from './Community';

export default compose(
  withRouter,

  withNamespaces(),
  
  withFirebaseCollection(
    () => firebase.firestore().collection('cities'),
    'cities'
  ),

  withFirebaseCollection(
    () => firebase.firestore().collection('communities'),
    'communities'
  ),

  withStateHandlers(
    ({ cities }) => ({
      city: '',
      community: '',
      error: null
    }),
    {
      onCityChange: () => (e) => ({ city: e.target.value }),
      onCommunityChange: () => (e) => ({ community: e.target.value }),
      onError: () => (error) => ({ error })
    }
  ),

  withHandlers({
    onSubmit: ({ city, community, history, t, onError }) => async (e) => {
      e.preventDefault();

      if (city === '') {
        onError(t('Please select a city to continue.'));
        return;
      }

      if (community === '') {
        onError(t('Please select a community to continue.'));
        return;
      }

      try {
        const auth = firebase.auth();
        const db = firebase.firestore();
        const userRef = db.collection('users').doc(auth.currentUser.uid);

        const cityRef = db.collection('cities').doc(city);
        const communityRef = db.collection('communities').doc(community);

        await userRef.set({
          city: cityRef,
          community: communityRef
        }, {
          merge: true
        });

        history.replace('/register/profile');
      } catch (err) {
        onError(err);
      }
    }
  })
)(Community);