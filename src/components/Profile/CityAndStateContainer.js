import { compose } from 'recompose';
import firebase from 'firebase';
import { withFirebaseDocument } from '../HOC/Firebase';
import CityAndState from './CityAndState';

export default compose(
  withFirebaseDocument(
    ({ cityId }) => firebase.firestore().collection('cities').doc(cityId),
    'city'
  )
)(CityAndState);