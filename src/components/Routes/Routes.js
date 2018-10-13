import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { AppNavbarContainer as AppNavbar } from '../App';
import { LocaleBarContainer as LocaleBar } from '../LocaleBar';
import { HomeContainer as Home } from '../Home';
import { LoginContainer as Login } from '../Login';
import { RegisterContainer as Register } from '../Register';
import { PostContainer as Post } from '../Post';

class Routes extends Component {
  render() {
    if (this.props.isLoading) {
      return <p>Loading</p>;
    }
    
    return (
      <Router>
        <React.Fragment>
          <AppNavbar />
          <LocaleBar />

          <Switch>
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute path="/posts/:id" component={Post} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;
