import React, { PureComponent } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ProtectedRoute extends PureComponent {
  render() {
    return (
      <Route
        path={this.props.path}
        exact={this.props.exact}
        render={(props) => {
          if (this.props.account.isLoggedIn) {
            if (this.props.render) {
              return this.props.render(props);
            } else {
              const { component: Component } = this.props;
              return <Component {...this.props} />;
            }
          } else {
            return <Redirect to={`/login?redirect_to=${this.props.location.pathname}`} />;
          }
        }}
      />
    );
  }
}

export default connect(
  ({ account }) => ({ account })
)(ProtectedRoute);