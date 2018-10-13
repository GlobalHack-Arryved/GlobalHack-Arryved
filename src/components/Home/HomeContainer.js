import { compose } from 'recompose';
import { connect } from 'react-redux';
import Home from './Home';

export default compose(
  connect(
    ({ account }) => ({ ...account })
  )
)(Home);
