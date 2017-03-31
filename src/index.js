import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import LoginView from '@containers/login/loginview';

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#8e44ad',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: '#ecf0f1',
  },
  bottomContainer: {
    flex: 0.1,
  },
  bottomText: {
    color: '#bdc3c7',
    fontSize: 12,
  },
};

const config = {
  apiKey: 'AIzaSyANwczZPwkIKh_keDD8qOZl5KpUWy1wWt4',
  authDomain: 'chatapp-96733.firebaseapp.com',
  databaseURL: 'https://chatapp-96733.firebaseio.com',
  projectId: 'chatapp-96733',
  storageBucket: 'chatapp-96733.appspot.com',
  messagingSenderId: '18439054051',
};

firebase.initializeApp(config);

export default class AppContainer extends Component {
  render() {
    const { container,
      title, bottomContainer, bottomText } = styles;
    return (
      <View style={container}>
        <Text style={title}>
          Welcome To ChatApp.
        </Text>
        <LoginView />
        <View style={bottomContainer}>
          <Text style={bottomText}>
            DeveloperBy: medineshkatwal@gmail.com
          </Text>
          <Text style={bottomText}>
            Using React-native, Facebook login, Firebase.
          </Text>
        </View>
      </View>

    );
  }
}
