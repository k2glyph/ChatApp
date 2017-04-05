import React from 'react';
import { Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from '@screens/authorized/Profile';

const styles = {
  icon: {
    width: 32,
    height: 32,
  },
};
const Profile = StackNavigator({
  Profile: { screen: ProfileScreen },
}, {
  navigationOptions: {
    drawer: {
      label: 'Profile',
      icon: () => (
        <Image
          style={{ width: 32, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
        />
        ),
    },
  },
});


export default Profile;
