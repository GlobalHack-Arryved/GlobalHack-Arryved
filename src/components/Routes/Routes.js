import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import { AppNavbarContainer as AppNavbar } from '../App';
import { LocaleBarContainer as LocaleBar } from '../LocaleBar';
import { HomeContainer as Home } from '../Home';
import { PostsContainer as Posts } from '../Posts';
import { LoginContainer as Login } from '../Login';
import { RegisterContainer as Register } from '../Register';
import { PostContainer as Post } from '../Post';
import { CommunityContainer as Community } from '../Register/Community';
import { ProfileContainer as Profile } from '../Register/Profile';
import { CategoriesContainer as Categories } from '../Categories';
import { AddPostContainer as AddPost } from '../AddPost';

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
            <Route exact path="/login" component={Login} />
            
            <ProtectedRoute exact path="/" component={Home} />
            
            <ProtectedRoute exact path="/posts/:id" component={Post} />
            {/* <ProtectedRoute exact path="/add-post" component={AddPost} /> */}
            
            <ProtectedRoute exact path="/categories" component={Categories} />
            <ProtectedRoute exact path="/categories/:category" component={Posts} />

            <Route exact path="/register" component={Register} />
            <ProtectedRoute exact path="/register/profile" component={Profile} />
            <ProtectedRoute exact path="/register/community" component={Community} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;
