import firebase from 'firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebaseCollection } from '../HOC/Firebase';
import Posts from './Posts';

export default compose(
  withRouter,

  withFirebaseCollection(
    () => firebase.firestore().collection('posts'),
    'posts'
  )
)(Posts);