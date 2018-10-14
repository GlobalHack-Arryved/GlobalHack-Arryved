import { withRouter } from 'react-router-dom';
import { compose, withHandlers } from 'recompose';
import { withNamespaces } from 'react-i18next';
import firebase from 'firebase';
import { withFirebaseCollection, withFirebaseDocument } from '../HOC/Firebase';
import PostsSearch from './PostsSearch';

export default compose(
  withRouter,

  withNamespaces(),

  withFirebaseCollection(
    () => firebase.firestore().collection('categories'),
    'categories'
  ),

  withFirebaseDocument(
    ({ currentCategoryId }) => firebase.firestore().collection('categories').doc(currentCategoryId),
    'selectedCategory'
  ),

  withHandlers({
    onCategoryChange: ({ history }) => (category) => {
      history.push('/categories/' + category.id);
      document.location.reload();
    }
  })
)(PostsSearch);