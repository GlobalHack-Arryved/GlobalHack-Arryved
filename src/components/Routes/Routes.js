import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { AppNavbarContainer as AppNavbar } from '../App';
import { LocaleBarContainer as LocaleBar } from '../LocaleBar';
import { PostsContainer as Posts } from '../Posts';
import { LoginContainer as Login } from '../Login';
import { RegisterContainer as Register } from '../Register';
import { PostContainer as Post } from '../Post';
import { CommunityContainer as Community } from '../Register/Community';
import { ProfileContainer as Profile } from '../Register/Profile';
import { ImmigrationContainer as Immigration } from '../Register/Immigration';
import { CategoriesContainer as Categories } from '../Categories';
import { AddPostContainer as AddPost } from '../AddPost';
import { Spinner } from '@blueprintjs/core';

class Routes extends Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex'
        }}>
          <Spinner />
        </div>
      );
    }
    
    return (
      <Router>
        <React.Fragment>
          <AppNavbar />
          <LocaleBar />

          <Switch>
            <Route exact path="/login" component={Login} />
            
            <ProtectedRoute
              exact
              path="/"
              render={() => <Redirect to="/categories" />}  
            />
            
            <ProtectedRoute exact path="/posts/:id" component={Post} />
            <ProtectedRoute exact path="/add-post" component={AddPost} />
            
            <ProtectedRoute exact path="/categories" component={Categories} />
            <ProtectedRoute exact path="/categories/:category" component={Posts} />

            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/register/profile" component={Profile} />
            <ProtectedRoute exact path="/register/community" component={Community} />
            <ProtectedRoute exact path="/register/immigration" component={Immigration} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;
