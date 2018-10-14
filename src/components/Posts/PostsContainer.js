import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebaseCollection } from '../HOC/Firebase';
import Posts from './Posts';

export default compose(
  withRouter,

  withFirebaseCollection(
    ({ match }) => (
      firebase
        .firestore()
        .collection('posts')
        .where(
          'category',
          '==',
          firebase.firestore().collection('categories').doc(match.params.category)
        )
    ),
    'posts'
  )
)(Posts);