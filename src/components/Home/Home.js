import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Hi, {this.props.userInfo.email}</h1>
      </div>
    );
  }
}

export default Home;
