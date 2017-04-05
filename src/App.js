import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import store from '@redux/store';
import AppNavigator from './AppNavigator';

const config = {
  apiKey: 'AIzaSyANwczZPwkIKh_keDD8qOZl5KpUWy1wWt4',
  authDomain: 'chatapp-96733.firebaseapp.com',
  databaseURL: 'https://chatapp-96733.firebaseio.com',
  projectId: 'chatapp-96733',
  storageBucket: 'chatapp-96733.appspot.com',
  messagingSenderId: '18439054051',
};

firebase.initializeApp(config);

const App = () => { //eslint-disable-line
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

AppRegistry.registerComponent('ChatApp', () => App);
