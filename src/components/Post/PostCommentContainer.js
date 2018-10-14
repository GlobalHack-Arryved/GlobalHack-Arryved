import {compose, withStateHandlers} from 'recompose';
import { withNamespaces } from 'react-i18next';

import PostComment from './PostComment';

export default compose(
  withNamespaces()
)(PostComment);