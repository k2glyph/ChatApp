import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk';
import firebase from 'firebase';

const styles = {
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: '#2980b9',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    color: '#ffffff',
    margin: 10,
    opacity: 0.8,
  },
};
class LoginView extends Component {
  // onLogin() {
  //   LoginManager.logInWithReadPermissions(['public_profile', 'email']).then((result) => {
  //     if (result.isCancelled) {
  //       console.log('Login Cancelled');
  //     } else {
  //       console.log(`Login Success ${result.grantedPermissions}`);
  //       console.log(result.data);
  //     }
  //   }, (error) => {
  //     console.log(`An error occured: ${error}`);
  //   });
  // }
  onLogin = async () => {
    try {
      const result = await LoginManager.logInWithReadPermissions((['public_profile', 'email']));
      const tokenData = await AccessToken.getCurrentAccessToken();
      const token = tokenData.accessToken.toString();
      console.log(`Token After login ${token}`);
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      const user = await firebase.auth().signInWithCredential(credential);
      console.log(user);
    } catch (error) {
      // handling error
      console.log(error.message);
    }
  }
  render() {
    const { loginContainer, buttonText, buttonStyle } = styles;
    return (
      <View style={loginContainer}>
        <View style={buttonStyle}>
          <TouchableOpacity onPress={this.onLogin}>
            <Text style={buttonText}>
              Sign in with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default LoginView;
