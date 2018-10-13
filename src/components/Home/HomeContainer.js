import { compose } from 'recompose';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import Home from './Home';

export default compose(
  withNamespaces(),

  connect(
    ({ account }) => ({ ...account })
  )
)(Home);
