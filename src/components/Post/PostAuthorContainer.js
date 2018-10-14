import {compose, withStateHandlers} from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import firebase from 'firebase';

import { withFirebaseDocument } from '../HOC/Firebase';
import PostAuthor from './PostAuthor';

export default compose(
  withRouter,

  withNamespaces(),

  withFirebaseDocument(
    (props) => {
      console.log(props);
      return firebase.firestore().collection('users').doc(props.id)
    },
    'author'
  )
)(PostAuthor);
