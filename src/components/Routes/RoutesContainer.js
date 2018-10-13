import { compose } from 'recompose';
import { connect } from 'react-redux';
import Routes from './Routes';

export default compose(
  connect(
    ({ account }) => ({ ...account })
  )
)(Routes);
