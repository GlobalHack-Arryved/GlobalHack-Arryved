import { withNamespaces } from 'react-i18next';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import Routes from './Routes';

export default compose(
  withNamespaces(),

  connect(
    ({ account }) => ({ ...account })
  )
)(Routes);
