import { compose } from 'recompose';
import { connect } from 'react-redux';
import Post from './Post';

export default compose(
  connect(
    ({ account }) => ({ ...account })
  )
)(Post);
