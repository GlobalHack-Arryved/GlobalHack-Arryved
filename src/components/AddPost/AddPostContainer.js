import { withNamespaces } from 'react-i18next';
import { compose, withStateHandlers, withHandlers } from 'recompose';
import { withFirebaseCollection, withFirebaseDocument } from '../HOC/Firebase';
import { withRouter } from 'react-router-dom';
import firebase from 'firebase';

import AddPost from './AddPost';

export default compose(
  withNamespaces(),

  withRouter,

  withStateHandlers(
    () => ({
      title: '',
      body: '',
      category: '',
      error: null
    }),

    {
      onTitleChange: () => (e) => ({ title: e.target.value }),
      onBodyChange: () => (e) => ({ body: e.target.value }),
      onCategoryChange: () => (e) => ({ category: e.target.value }),
      onError: () => (error) => ({ error })
    }
  ),

  withFirebaseCollection(
    () => firebase.firestore().collection('categories'),
    'categories'
  ),

  withFirebaseDocument(
    () => {
      const auth = firebase.auth();
      return firebase.firestore().collection('users').doc(auth.currentUser.uid)
    },
    'user'
  ),

  withHandlers({
    onSubmit: ({ title, body, category, user, history, onError }) => async (e) => {
      e.preventDefault();

      try {
        const auth = firebase.auth();
        const db = firebase.firestore();
        const categoryRef = db.collection('categories').doc(category);
        const userRef = db.collection('users').doc(auth.currentUser.uid);
        const cityRef = db.collection('cities').doc(user.data.city.id);
        
        const postRef = await db.collection('posts').add({
          title,
          body,
          category: categoryRef,
          user: userRef,
          city: cityRef,
        });

        history.push(`/categories/${category}`);
      } catch (err) {
        onError(err.message);
      }
    }
  })
)(AddPost);
