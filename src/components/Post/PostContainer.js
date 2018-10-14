import {compose, withStateHandlers} from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import firebase from 'firebase';

import {withFirebaseCollection, withFirebaseDocument} from '../HOC/Firebase';
import Post from './Post';

export default compose(
  withRouter,

  withNamespaces(),

  withFirebaseDocument(
    (props) => firebase.firestore().collection('posts').doc(props.match.params.id),
    'posts'
  ),

  withFirebaseCollection(
    (props) => firebase.firestore().collection('posts').doc(props.match.params.id).collection('comments'),
    'comments'
  )
)(Post);
