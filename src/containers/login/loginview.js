import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
  render() {
    const { loginContainer, buttonText, buttonStyle } = styles;
    return (
      <View style={loginContainer}>
        <View style={buttonStyle}>
          <TouchableOpacity onPress={this.login}>
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
