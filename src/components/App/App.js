import React, { Component } from 'react';
import i18n from './i18n';
import { FocusStyleManager } from '@blueprintjs/core';

import firebase from 'firebase';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../../reducers';
import { setLoggedIn, setUserInfo } from '../../actions/account';

import { RoutesContainer as Routes } from '../Routes';

class App extends Component {
  render() {
    FocusStyleManager.onlyShowFocusOnTabs();

    firebase.initializeApp({
      // Firebase Config Goes Here
    });

    firebase.firestore().settings({
      timestampsInSnapshots: true
    });

    const store = createStore(
      combineReducers(reducers),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const { displayName, email, emailVerified, photoURL, uid, providerData } = user;
        store.dispatch(setLoggedIn(true));

        const profileRef = firebase.firestore().collection('users').doc(uid);
        const profileSnapshot = await profileRef.get();
        const languageRef = profileSnapshot.data().language;
        const languageSnapshot = await languageRef.get();
        const language = languageSnapshot.data();

        i18n.changeLanguage(language.locale);
        store.dispatch(setUserInfo({ displayName, email, emailVerified, photoURL, uid, providerData, language }));
      } else {
        store.dispatch(setLoggedIn(false));
        i18n.changeLanguage('en');
        document.body.classList.remove('bl3-rtl');
      }
    });

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
